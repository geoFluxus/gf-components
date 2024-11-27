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
  linktooltip: ({ link }) => JSX.Element;
  nodetooltip: ({ node }) => JSX.Element;
}

const Sankey: React.FC<Props> = ({
  sankeyData,
  linktooltip = null,
  nodetooltip = null,
}) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveSankey
          data={sankeyData}
          margin={{ top: 20, right: 120, bottom: 20, left: 120 }}
          nodeTooltip={({ node }) => (
            <CustomToolTip
              body={nodetooltip?.({ node }) || <span>Sankey node tooltip</span>}
            />
          )}
          linkTooltip={({ link }) => {
            return (
              <CustomToolTip
                body={
                  linktooltip?.({ link }) || <span>Sankey link tooltip</span>
                }
              />
            );
          }}
        />
      </div>
    </>
  );
};

export default Sankey;
