import React from "react";
import { DefaultLink, DefaultNode, ResponsiveSankey } from "@nivo/sankey";
import GlobalStyle from "../../globalStyles";

export interface Props {
  data: {
    nodes: DefaultNode[];
    links: DefaultLink[];
  };
}

const scale = {
    A: "#39b54a",
    B: "#8cc63f",
    C: '#d9e021',
    D: '#fcee21',
    E: '#fbb03b',
    F: '#f7931e',
    G: '#f15a24',
    H: '#cc3333',
    I: '#4d4d4d',
}

const BenchmarkSankey: React.FC<Props> = ({ data }) => {
  const padding = 2,
        fontSize = 12,
        borderWidth = 2
  const width = 50,
        height = padding * 2 + (fontSize + 2) + borderWidth * 2,
        offsetX = 10
  const nodeThickness = 20,
        nodeSpacing = height

  // color nodes
  data.nodes = data.nodes.map(n => ({
    ...n,
    nodeColor: scale[n.rank]
  }))

  // color links with target color
  data.links = data.links.map(l => ({
    ...l,
    startColor: scale[l.target_rank],
    endColor: scale[l.target_rank],
  }))

  // node label
  const getNodeLabel = (n) => `${
    n.pct > 1 ? n.pct.toFixed(0) :
    n.pct > 0.1 ? n.pct.toFixed(1) :
    '<0.1'}%`

  const CustomNode = ({ node }) => {
      const transX = node.sourceLinks.length ? -(width + offsetX) : nodeThickness + offsetX,
            transY = node.height / 2 - height / 2

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
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <span><b>{node.rank}</b></span>
                <span>{getNodeLabel(node)}</span>
              </div>
            </foreignObject>
          </g>
      )
  };

  const CustomNodeLayer = ({ nodes }) =>
    nodes.map((node) => <CustomNode key={node.id} node={node} />);

  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveSankey
          data={data}
          margin={{ top: 20, right: 120, bottom: 20, left: 120 }}
          sort={'input'}
          labelPosition={'outside'}
          colors={node => node.nodeColor}
          enableLinkGradient={true}
          linkOpacity={0.5}
          nodeOpacity={1}
          nodeBorderWidth={0}
          nodeThickness={nodeThickness}
          nodeSpacing={nodeSpacing}
          layers={["links", "nodes", CustomNodeLayer]}
        />
      </div>
    </>
  );
};

export default BenchmarkSankey;
