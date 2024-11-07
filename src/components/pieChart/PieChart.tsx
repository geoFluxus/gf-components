import React, { useEffect, useRef, useState } from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";

export interface Props {
  pieChartData: any;
  title: string;
  isEmpty: boolean;
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

const PieChart: React.FC<Props> = ({ pieChartData, title, isEmpty }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600, position: "relative" }}>
        <StyledSpan>{title}</StyledSpan>

        <ResponsivePie
          colors={{ scheme: isEmpty ? "greys" : "nivo" }}
          tooltip={(
            // @ts-ignore
            { datum: { id, label, value, color, unit } },
          ) => <CustomToolTip label={label} amount={value} unit={unit} />}
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
        {isEmpty && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              zIndex: 10,
              pointerEvents: "none", // Disable events on the overlay
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#aaa",
                fontSize: "18px",
              }}
            >
              Data niet openbaar beschikbaar
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PieChart;
