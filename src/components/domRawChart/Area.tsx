import { area, curveMonotoneX } from 'd3-shape'


const Area = ({data, layer}) => {
    const adaptedData = []
    data?.grid?.forEach((d, idx) => {
        adaptedData.push({
            x: data?.grid?.[idx],
            y0: data?.upper_bound?.[idx],
            y1: data?.lower_bound?.[idx],
        })
    })

    const areaGenerator = area()
        .x(d => layer.xScale(d.x))
        .y0(d => layer.yScale(d.y0))
        .y1(d => layer.yScale(d.y1))
        .curve(curveMonotoneX)

    return (
        <path
            d={areaGenerator(adaptedData)}
            fill="#3daff7"
            fillOpacity={0.3}
        />
    )
}

export default Area