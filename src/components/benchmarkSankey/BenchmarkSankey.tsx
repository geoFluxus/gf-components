import React from "react";
import {
  DefaultLink,
  DefaultNode,
  ResponsiveSankey,
  SankeyLayerId,
} from "@nivo/sankey";
import GlobalStyle from "../../globalStyles";
import CustomToolTip from "../customToolTip/CustomToolTip";
import { Flex, Typography, Row, Col } from "antd";
import styled from 'styled-components';


const { Text } = Typography
const StyledText = styled(Text)`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
`

interface DefaultNodeWithExtras extends DefaultNode {
  rank: string;
  value: number;
  pct: number;
  unit: string;
  nodeColor: string;
}
interface DefaultLinkWithExtras extends DefaultLink {
  source_rank: string;
  target_rank: string;

  unit: string;
}
export interface Props {
  data: {
    nodes: DefaultNodeWithExtras[];
    links: DefaultLinkWithExtras[];
  };
}

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
  A: "Direct hoogwardig inzetten",
  B: "Indirect hoogwardig inzetten",
  C: "Voorbereiding voor recycling",
  D: "Microbiologische verwerking",
  E: "Grondreiniging",
  F: "Verbranding met opbrengst",
  G: "Verbranden",
  H: "Storten",
  I: "Opslag",
};


const BenchmarkSankey: React.FC<Props> = ({
    data,
    margin={},
    height=null,
    nodeTooltip=null,
    linkTooltip=null
}) => {
  // node label
  const nodeLabelPadding = 2,
        nodeLabelFontSize = 22,
        nodeLabelBorderWidth = 2;
  const nodeLabelWidth = 60,
        nodeLabelHeight = nodeLabelPadding * 2 + (nodeLabelFontSize + 2) + nodeLabelBorderWidth * 2,
        nodeLabelOffsetX = 10;
  const nodeThickness = 20,
        nodeSpacing = nodeLabelHeight;

  // color nodes
  data.nodes = data.nodes.map((n) => ({
    ...n,
    nodeColor: scale[n.rank],
  }));

  // color links with target color
  data.links = data.links.map((l) => ({
    ...l,
    startColor: scale[l.target.rank],
    endColor: scale[l.target.rank],
  }));

  // node label
  const getNodeLabel = (n) =>
    `${
      n.pct > 1 ? n.pct.toFixed(0) : n.pct > 0.1 ? n.pct.toFixed(1) : "<0.1"
    }%`;

  const CustomNode = ({ node }) => {
    const transX = node.sourceLinks.length
        ? -(nodeLabelWidth + nodeLabelOffsetX)
        : nodeThickness + nodeLabelOffsetX,
      transY = node.height / 2 - nodeLabelHeight / 2;

    return (
      <g transform={`translate(${node.x0 + transX}, ${node.y0 + transY})`}>
        <foreignObject width={nodeLabelWidth} height={nodeLabelHeight}>
          <Flex
            justify="space-between"
            align="center"
            style={{
              color: "black",
              textAlign: "center",
              padding: `${nodeLabelPadding}px`,
              border: `${nodeLabelBorderWidth}px solid ${node.color}`,
              whiteSpace: 'nowrap'
            }}
          >
            <StyledText strong>{node.rank}</StyledText>
            <StyledText>{getNodeLabel(node)}</StyledText>
          </Flex>
        </foreignObject>
      </g>
    );
  };

  // @ts-ignore
  const CustomNodeLayer: SankeyLayerId = ({ nodes }) =>
    nodes.map((node) => <CustomNode key={node.id} node={node} />);

  const Legend = () => (
    <div style={{ marginTop: 10, whiteSpace: 'nowrap' }}>
      {Object.keys(scale).map((rank) => (
        <Flex gap={8} align="center">
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

  return (
    <>
      <GlobalStyle />
        <Row style={{width: "100%"}}>
            <Col span={8}>
                <Legend />
            </Col>
            <Col span={16}>
                <div
                    style={{
                      height: height || 600,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                >
                    <ResponsiveSankey
                      data={data}
                      margin={{ top: 20, right: 100, bottom: 20, left: 100, ...margin }}
                      sort={"input"}
                      labelPosition={"outside"}
                      colors={(node) => node.nodeColor}
                      enableLinkGradient={true}
                      linkOpacity={0.5}
                      nodeOpacity={1}
                      nodeBorderWidth={0}
                      nodeThickness={nodeThickness}
                      nodeSpacing={nodeSpacing}
                      nodeTooltip={({ node }) => {
                        return (
                          <CustomToolTip body={ nodeTooltip?.({node}) || <span>Node tooltip</span>} />
                        );
                      }}
                      linkTooltip={({ link }) => {
                        return (
                          <CustomToolTip body={ linkTooltip?.({link}) || <span>Link tooltip</span>} />
                        );
                      }}
                      layers={["links", "nodes", CustomNodeLayer]}
                    />
                </div>
            </Col>
        </Row>

    </>
  );
};

export default BenchmarkSankey;
