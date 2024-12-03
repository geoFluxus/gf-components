import { area, curveMonotoneX } from 'd3-shape'


const Area = ({data, color, graph}) => {
    const areaGenerator = area()
        .x(d => graph.xScale(d?.x))
        .y0(d => graph.yScale(d?.y0))
        .y1(d => graph.yScale(d?.y1))
        .curve(curveMonotoneX)

    return (
        <path
            d={areaGenerator(data)}
            fill={color || "#3daff7"}
            fillOpacity={0.3}
        />
    )
}

export default Area