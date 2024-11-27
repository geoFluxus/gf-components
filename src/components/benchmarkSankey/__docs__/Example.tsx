import React from "react";
import BenchmarkSankey from "../BenchmarkSankey";

const Example = ({ data, nodeTooltip, linkTooltip }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <BenchmarkSankey
        data={data}
        nodeTooltip={nodeTooltip}
        linkTooltip={linkTooltip}
      />
    </div>
  );
};

export default Example;
