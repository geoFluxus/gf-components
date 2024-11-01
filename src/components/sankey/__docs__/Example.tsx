import React from "react";
import { Sankey } from "..";

const Example = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Sankey sankeyData={data} />
    </div>
  );
};

export default Example;
