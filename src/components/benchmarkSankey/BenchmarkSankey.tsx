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
  data.nodes = data.nodes.map(n => ({
    ...n,
    nodeColor: scale[n.rank]
  }))

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
        />
      </div>
    </>
  );
};

export default BenchmarkSankey;
