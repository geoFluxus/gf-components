import React from "react";
import Sankey from "../Sankey"

const Example = ({ data, linktooltip, nodetooltip }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Sankey sankeyData={data} linktooltip={linktooltip} nodetooltip={nodetooltip}/>
    </div>
  );
};

export default Example;
