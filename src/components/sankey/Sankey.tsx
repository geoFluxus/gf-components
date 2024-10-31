import React from "react";
import { DefaultLink, DefaultNode, ResponsiveSankey } from "@nivo/sankey";
import GlobalStyle from "../../globalStyles";
import { CustomToolTip } from "../customToolTip";

interface DefaultNodeWithUnit extends DefaultNode {
  unit: string;
}
interface DefaultLinkWithUnit extends DefaultLink {
  unit: string;
}
export interface Props {
  sankeyData: {
    nodes: DefaultNodeWithUnit[];
    links: DefaultLinkWithUnit[];
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
          nodeTooltip={({ node: { id, value, unit } }) => (
            <CustomToolTip label={id} amount={value} unit={unit} />
          )}
          linkTooltip={({ link }) => {
            return (
              <CustomToolTip
                label={
                  <>
                    <b>{link.source.label}</b>
                    <span>{" > "}</span>
                    <b>{link.target.label}</b>
                  </>
                }
                amount={link.value}
                unit={link.unit}
              />
            );
          }}
        />
      </div>
    </>
  );
};

export default Sankey;
