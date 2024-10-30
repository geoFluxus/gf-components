import React from "react";
import { DefaultLink, DefaultNode, ResponsiveSankey } from "@nivo/sankey";
import GlobalStyle from "../../globalStyles";
import { CustomToolTip } from "../customToolTip";

export interface Props {
  sankeyData: {
    nodes: DefaultNode[];
    links: DefaultLink[];
  };
}

const Sankey: React.FC<Props> = ({ sankeyData }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveSankey
          data={sankeyData}
          margin={{ top: 20, right: 120, bottom: 20, left: 120 }}
      
          linkTooltip={CustomToolTip}
        />
      </div>
    </>
  );
};

export default Sankey;
