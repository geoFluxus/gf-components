import React from "react";
import {
  DefaultLink,
  DefaultNode,
  ResponsiveSankey,
  SankeyLayerId,
} from "@nivo/sankey";
import GlobalStyle from "../../globalStyles";
import CustomToolTip from "../customToolTip/CustomToolTip";
import { Flex } from "antd";

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

const BenchmarkSankey: React.FC<Props> = ({ data }) => {
  const padding = 2,
    fontSize = 12,
    borderWidth = 2;
  const width = 50,
    height = padding * 2 + (fontSize + 2) + borderWidth * 2,
    offsetX = 10;
  const nodeThickness = 20,
    nodeSpacing = height;

  // color nodes
  data.nodes = data.nodes.map((n) => ({
    ...n,
    nodeColor: scale[n.rank],
  }));

  // color links with target color
  data.links = data.links.map((l) => ({
    ...l,
    startColor: scale[l.target_rank],
    endColor: scale[l.target_rank],
  }));

  // node label
  const getNodeLabel = (n) =>
    `${
      n.pct > 1 ? n.pct.toFixed(0) : n.pct > 0.1 ? n.pct.toFixed(1) : "<0.1"
    }%`;

  const CustomNode = ({ node }) => {
    const transX = node.sourceLinks.length
        ? -(width + offsetX)
        : nodeThickness + offsetX,
      transY = node.height / 2 - height / 2;

    return (
      <g transform={`translate(${node.x0 + transX}, ${node.y0 + transY})`}>
        <foreignObject width={width} height={height}>
          <div
            style={{
              color: "black",
              textAlign: "center",
              padding: `${padding}px`,
              fontSize: `${fontSize}px`,
              border: `${borderWidth}px solid ${node.color}`,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <b>{node.rank}</b>
            </span>
            <span>{getNodeLabel(node)}</span>
          </div>
        </foreignObject>
      </g>
    );
  };

  // @ts-ignore
  const CustomNodeLayer: SankeyLayerId = ({ nodes }) =>
    nodes.map((node) => <CustomNode key={node.id} node={node} />);

  const Legend = () => (
    <div style={{ marginTop: 10 }}>
      {Object.keys(scale).map((rank) => (
        <Flex gap={8}>
          <div
            style={{
              backgroundColor: scale[rank],
              width: 20,
              height: 20,
              border: "1px solid gray",
            }}
          />
          <span>{`${rank} ${ranks[rank]}`}</span>
        </Flex>
      ))}
    </div>
  );

  return (
    <>
      <GlobalStyle />
      <div
        style={{
          width: "100%",
          height: 600,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Legend />
        <ResponsiveSankey
          data={data}
          margin={{ top: 20, right: 260, bottom: 20, left: 260 }}
          sort={"input"}
          labelPosition={"outside"}
          colors={(node) => node.nodeColor}
          enableLinkGradient={true}
          linkOpacity={0.5}
          nodeOpacity={1}
          nodeBorderWidth={0}
          nodeThickness={nodeThickness}
          nodeSpacing={nodeSpacing}
          nodeTooltip={({ node }) => (
            <CustomToolTip
              label={node.rank}
              amount={node.value}
              unit={node.unit}
            />
          )}
          linkTooltip={({ link }) => {
            return (
              <CustomToolTip
                label={
                  <>
                    <b>{link.source.rank}</b>
                    <span>{" > "}</span>
                    <b>{link.target.rank}</b>
                  </>
                }
                amount={link.value}
                unit={link.unit}
              />
            );
          }}
          layers={["links", "nodes", CustomNodeLayer]}
        />
      </div>
    </>
  );
};

export default BenchmarkSankey;