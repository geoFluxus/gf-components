import React from "react";
import GlobalStyle from "../../globalStyles";
import { CustomToolTip } from "../customToolTip";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import Line from "./Line";
import Area from "./Area";


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
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: height, ...style }}>
        <ResponsiveScatterPlot
            data={[data?.points]}
            margin={{ top: 20, right: 120, bottom: 20, left: 120, ...margin }}
            xScale={{ type: 'linear', min: 2015, max: 2030, ...xScale }}
            yScale={{ type: 'linear', min: 0, max: 5000, ...yScale }}
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
                (props) => <Area data={data?.area} layer={props} />,
                (props) => <Line data={data?.line} layer={props} />,
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
