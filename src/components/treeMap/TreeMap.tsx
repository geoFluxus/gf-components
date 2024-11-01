import React from "react";

import GlobalStyle from "../../globalStyles";
import { ResponsiveTreeMap } from "@nivo/treemap";
//import { CustomToolTip } from "../customToolTip";

export interface Props {
  treeMapData: object;
}

const Sankey: React.FC<Props> = ({ treeMapData }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveTreeMap
          data={treeMapData}
          identity="name"
          value="loc"
          valueFormat=".02s"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.2]],
          }}
          parentLabelPosition="left"
          parentLabelTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.1]],
          }}
          tooltip={({ node }) => (
            <strong
              style={{
                color: node.color,
              }}
            >
              {node.pathComponents.join(" / ")}: {node.formattedValue}
            </strong>
          )}
        />
      </div>
    </>
  );
};

export default Sankey;
