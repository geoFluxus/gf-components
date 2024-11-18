import React from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { CustomToolTip } from "../customToolTip";

export interface Props {
  treeMapData: object;
}

const Sankey: React.FC<Props> = ({
    treeMapData,
    style={},
    colors={ datum: 'data.color' },
    identity=null,
    value=null,
    margin={},
    label=null,
    orientLabel=false,
    labelSkipSize=12,
    labelTextColor=null,
    borderColor=null,
    tooltip=null
}) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600, ...style }}>
        <ResponsiveTreeMap
          data={treeMapData}
          colors={colors || {scheme: 'nivo'}}
          identity={identity || "name"}
          value={value || "loc"}
          margin={{ top: 10, right: 10, bottom: 10, left: 10, ...margin }}
          enableParentLabel={false}
          label={(node) => {
            return label?.(node) || `${node?.id}`
          }}
          orientLabel={orientLabel}
          labelSkipSize={labelSkipSize}
          labelTextColor={labelTextColor || 'black'}
          borderColor={borderColor || {
            from: "color",
            modifiers: [["darker", 0.1]],
          }}
          tooltip={({ node }) => {
            return (
              <CustomToolTip body={ tooltip?.({node}) || <span>Treemap tooltip</span>} />
            );
          }}
        />
      </div>
    </>
  );
};

export default Sankey;
