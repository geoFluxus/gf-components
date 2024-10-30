import React from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";

export interface Props {
  pieChartData: any;
  title: string;
}

const StyledSpan = styled.span`
  color: black;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  margin-left: 70px;
  margin-bottom: 50px;
  padding: 50px;
`;

const PieChart: React.FC<Props> = ({ pieChartData, title }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600 }}>
        <StyledSpan>{title}</StyledSpan>
        <ResponsivePie
          tooltip={({ datum }) => {
            return (
              <CustomToolTip
                label={datum.label}
                amount={datum.value}
                unit="kg"
              />
            );
          }}
          data={pieChartData}
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
        />
      </div>
    </>
  );
};

export default PieChart;
