import React, { useState } from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";
import { Col, Row, Flex } from "antd";

export interface Props {
  pieChartData: any;
  title: string;
  isEmpty: boolean;
  tooltip?: ({ id, value, unit }) => JSX.Element;
  customStyle?: object;
  customMargin?: object;
  height?: number;
}

const StyledSpan = styled.span`
  color: black;
  font: var(--gf-label-md-default);
  font-weight: 600;
  font-size: 20px;
`;

const StyledLabel = styled.span`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: 10px;
`

const PieChart: React.FC<Props> = ({
  pieChartData,
  title,
  isEmpty,
  sortByValue=true,
  arcLabel=null,
  tooltip = null,
  customStyle = {},
  customMargin = {},
  height = 600,
  legendWidth='50%'
}) => {
  const [arcData, setArcData] = useState([])

  const CenteredMetric = ({ centerX, centerY, dataWithArc }) => {
    if (!arcData.length) {
        setArcData(dataWithArc)
    }

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

  const Legend = ({data}) => {
    return (
        <Flex gap={16} className='gf-full' justify="center" wrap style={{width: legendWidth}}>
            {data?.map((l, idx) =>
                <Flex gap={8} align="center" key={`legend-${idx}`}>
                    <div style={{
                        minWidth: 16,
                        minHeight: 16,
                        backgroundColor: l.color
                    }} />
                    <StyledLabel>{l.label}</StyledLabel>
                </Flex>
            )}
        </Flex>
    )
  }

  return (
    <>
      <GlobalStyle />
      <Flex vertical gap={8} align="center" style={{width: "100%"}}>
        <StyledSpan>{title}</StyledSpan>
        <div style={{width: "100%", height: height}}>
            <ResponsivePie
              colors={{ scheme: isEmpty ? "greys" : "nivo" }}
              data={pieChartData}
              sortByValue={sortByValue}
              enableArcLabels={!isEmpty}
              arcLabel={d => arcLabel?.(d) || d.formattedValue}
              enableArcLinkLabels={false}
              margin={{
                top: 50,
                right: 80,
                bottom: 50,
                left: 80,
                ...customMargin,
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              isInteractive={!isEmpty}
              layers={[
                "arcs",
                "arcLabels",
                "arcLinkLabels",
                "legends",
                CenteredMetric
              ]}
              tooltip={({ datum: { id, value, unit } }) => {
                return (
                  <CustomToolTip
                    body={
                      tooltip?.({ id, value, unit }) || (
                        <span>Pie chart tooltip</span>
                      )
                    }
                  />
                );
              }}
            />
        </div>
        <Legend data={arcData} />
      </Flex>
    </>
  );
};

export default PieChart;
