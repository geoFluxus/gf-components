import React from "react";
import GlobalStyle from "../../globalStyles";
import { CustomToolTip } from "../customToolTip";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import Line from "./Line";
import Area from "./Area";


const getMin = (array, prop) => {
    return array.reduce((min, obj) => (obj?.[prop] < min ? obj?.[prop] : min), Infinity)
}

const getMax = (array, prop) => {
    return array.reduce((max, obj) => (obj?.[prop] > max ? obj?.[prop] : max), -Infinity)
}


const DomRawChart: React.FC<Props> = ({
    data,
    style={},
    height=600,
    margin={},
    xScale={},
    yScale={},
    axisBottom={},
    axisLeft={},
    tooltip=null,
}) => {
  // get minmax for x-axis
  const area = data?.area
  const minX = getMin(area, 'x')
  const maxX = getMax(area, 'x')

  // get max for y-axis (min=0)
  const maxY0 = getMax(area, 'y0')
  const maxY1 = getMax(area, 'y1')
  const maxY = Math.max(maxY0, maxY1)

  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: height, ...style }}>
        <ResponsiveScatterPlot
            data={[data?.points]}
            margin={{ top: 20, right: 120, bottom: 20, left: 120, ...margin }}
            xScale={{ type: 'linear', min: minX, max: maxX, ...xScale }}
            yScale={{ type: 'linear', min: 0, max: maxY, ...yScale }}
            axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: "middle",
                legendOffset: 46,
                truncateTickAt: 0,
                legend: "axisBottom",
                ...axisBottom,
            }}
            axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: "middle",
                legendOffset: -60,
                truncateTickAt: 0,
                legend: "axisLeft",
                ...axisLeft,
            }}
            layers={[
                "grid",
                "markers",
                "axes",
                "legends",
                (props) => <Area data={data?.area} graph={props} />,
                (props) => <Line data={data?.line} graph={props} />,
                "nodes",
            ]}
            tooltip={({ node }) => {
                return (
                  <CustomToolTip
                    body={tooltip?.({ node }) || <span>Tooltip</span>}
                  />
                );
            }}
        />
      </div>
    </>
  );
};

export default DomRawChart;
