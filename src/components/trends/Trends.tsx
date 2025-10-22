import React from "react";
import GlobalStyle from "../../globalStyles";
import { Flex, Row, Col } from "antd";
import { ResponsiveLine, Serie } from "@nivo/line";
import { CustomToolTip } from "../customToolTip";
import styled from 'styled-components';

export interface Props {
  trendsData: readonly Serie[];
  xLeg: string;
  yLeg: string;
  tooltip: ({ dt }) => JSX.Element;
}

const StyledText = styled.span`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
`

const scale = {
  A: "#39b54a",
  B: "#8cc63f",
  C: "#d9e021",
  D: "#fcee21",
  E: "#fbb03b",
  F: "#f7931e",
  G: "#f15a24",
  H: "#cc3333",
  I: "#4d4d4d",
};

const ranks = {
  A: "Direct hoogwaardig inzetten",
  B: "Indirect hoogwaardig inzetten",
  C: "Voorbereiding voor recycling",
  D: "Microbiologische verwerking",
  E: "Grondreiniging",
  F: "Verbranding met opbrengst",
  G: "Verbranden",
  H: "Storten",
  I: "Opslag",
};


const Legend = () => (
    <div style={{ marginTop: 10, marginLeft: 10, whiteSpace: 'nowrap' }}>
      {Object.keys(scale).map((rank, idx) => (
        <Flex gap={8} align="center" key={`legend-${idx}`}>
          <div
            style={{
              backgroundColor: scale[rank],
              minWidth: 22,
              minHeight: 22,
              border: "1px solid gray",
            }}
          />
          <StyledText>{`${rank} ${ranks[rank]}`}</StyledText>
        </Flex>
      ))}
    </div>
  );

const Trends: React.FC<Props> = ({
  trendsData,
  height = null,
  margin = {},
  colors = null,
  xLeg,
  yLeg,
  tooltip = null,
}) => {
  return (
    <>
      <GlobalStyle />
      <Row style={{ width: "100%" }}>
        <Col span={6}>
            <Legend />
        </Col>
        <Col span={18}>
          <div style={{ width: "100%", height: height || 600 }}>
            <ResponsiveLine
              data={trendsData}
              margin={{ top: 20, right: 20, bottom: 60, left: 90, ...margin }}
              colors={colors || { scheme: "nivo" }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "auto", max: "auto", reverse: false }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: xLeg,
                legendOffset: 50,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: yLeg,
                legendOffset: -70,
                legendPosition: "middle",
              }}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              tooltip={(dt) => {
                return (
                  <CustomToolTip
                    body={tooltip?.(dt) || <span>Line tooltip</span>}
                  />
                );
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Trends;
