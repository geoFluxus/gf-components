import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import GlobalStyle from "../../globalStyles";
import LineTarget from "./LineTarget";
import { CustomToolTip } from "../customToolTip";

interface ScatterPlotDatum {
  x: string;
  y: number;
}
interface ScatterPlotRawSerie {
  id: string;
  data: ScatterPlotDatum[];
}
interface Line {
  x1: string; // Starting x-axis value
  y1: number; // Starting y-axis value
  x2: string; // Ending x-axis value
  y2: number; // Ending y-axis value
}
interface ScatterPlotDataType {
  points: ScatterPlotRawSerie;
  line: Line;
}
export interface Props {
  scatterPlotData: ScatterPlotDataType;
  tooltip: ({ node }) => JSX.Element;
  style: object;
  margin: object;
  axisBottom: object;
  axisLeft: object;
}

const ScatterPlot: React.FC<Props> = ({
  scatterPlotData,
  style = {},
  margin = {},
  axisBottom = {},
  axisLeft = {},
  tooltip = null,
}) => {
  const line = scatterPlotData?.line,
    x1 = line?.x1,
    y1 = line?.y1,
    x2 = line?.x2,
    y2 = line?.y2;
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600, ...style }}>
        <ResponsiveScatterPlot
          data={[scatterPlotData?.points]}
          margin={{ top: 20, right: 120, bottom: 100, left: 120, ...margin }}
          xScale={{ type: "point" }}
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
            "nodes",
            "legends",
            (props) => {
              return (
                <LineTarget
                  // @ts-ignore
                  x1={props.xScale(x1)}
                  y1={props.yScale(y1)}
                  // @ts-ignore
                  x2={props.xScale(x2)}
                  y2={props.yScale(y2)}
                />
              );
            },
          ]}
          tooltip={({ node }) => {
            return (
              <CustomToolTip
                body={tooltip?.({ node }) || <span>Scatterplot tooltip</span>}
              />
            );
          }}
        />
      </div>
    </>
  );
};

export default ScatterPlot;
