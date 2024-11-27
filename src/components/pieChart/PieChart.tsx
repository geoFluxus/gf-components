import React from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";

export interface Props {
  pieChartData: any;
  title: string;
  isEmpty: boolean;
  tooltip: ({ id, value, color }) => JSX.Element;
}

const StyledSpan = styled.span`
  color: black;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  margin-left: 100px;
  margin-bottom: 50px;
  padding: 50px;
`;

const PieChart: React.FC<Props> = ({
  pieChartData,
  title,
  isEmpty,
  tooltip = null,
}) => {
  const CenteredMetric = ({ centerX, centerY }) => {
    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        {isEmpty ? "Data niet openbaar beschikbaar" : ""}
      </text>
    );
  };
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600, position: "relative" }}>
        <StyledSpan>{title}</StyledSpan>

        <ResponsivePie
          colors={{ scheme: isEmpty ? "greys" : "nivo" }}
          data={pieChartData}
          enableArcLabels={!isEmpty}
          enableArcLinkLabels={!isEmpty}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          isInteractive={!isEmpty}
          layers={[
            "arcs",
            "arcLabels",
            "arcLinkLabels",
            "legends",
            CenteredMetric,
          ]}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          tooltip={({ datum: { id, value, color } }) => {
            return (
              <CustomToolTip
                body={
                  tooltip?.({ id, value, color }) || (
                    <span>Pie chart tooltip</span>
                  )
                }
              />
            );
          }}
        />
      </div>
    </>
  );
};

export default PieChart;
