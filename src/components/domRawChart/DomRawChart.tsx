import React from "react";
import GlobalStyle from "../../globalStyles";
import { CustomToolTip } from "../customToolTip";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import Line from "./Line";
import Area from "./Area";


const colors = {
    'domestic': 'hsl(42, 89%, 49%)',
    'raw': 'hsl(331, 100%, 36%)',
    'abiotic': 'hsl(0, 0%, 49%)',
}

const getMin = (array) => {
    return array.reduce((min, obj) => (obj < min ? obj : min), Infinity)
}

const getMax = (array) => {
    return array.reduce((max, obj) => (obj > max ? obj : max), -Infinity)
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
  // scatterplot points
  const points = data.map(d => d?.points)

  // confidence areas
  const areas = data.map(d => d?.area)
  const AreaLayer = (props) =>
    areas.map((area, idx) =>
        <Area key={`area-${idx}`} data={area?.data}
              color={colors?.[area?.id]} graph={props} />
    )

  // regression
  const lines = data.map(d => d?.line)
  const LineLayer = (props) =>
    lines.map((line, idx) =>
        <Line key={`line-${idx}`} data={line?.data}
              stroke={colors?.[line?.id]} graph={props} />
    )

  // goal line
  const goals = data.map(d => d?.goal)
  const GoalLayer = (props) =>
    goals.map((goal, idx) =>
        <Line key={`goal-${idx}`} data={goal}
              graph={props} stroke="rgb(53, 149, 150)" dashed />
    )

  // x-axis
  const x = areas.map(a => a.data.map(o => o.x)).flat()
  const minX = getMin(x)
  const maxX = getMax(x)

  // y-axis
  const y0 = areas.map(a => a.data.map(o => o.y0)).flat()
  const y1 = areas.map(a => a.data.map(o => o.y1)).flat()
  const maxY = Math.max(getMax(y0), getMax(y1))

  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: height, ...style }}>
        <ResponsiveScatterPlot
            data={points}
            colors={(d) => colors?.[d?.serieId]}
            margin={{ top: 20, right: 120, bottom: 60, left: 120, ...margin }}
            xScale={{ type: 'linear', min: minX, max: 2030, ...xScale }}
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
                AreaLayer,
                LineLayer,
                GoalLayer,
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
