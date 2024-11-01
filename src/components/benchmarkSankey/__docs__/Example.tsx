import React from "react";
import { BenchmarkSankey } from "..";

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
      <BenchmarkSankey data={data} />
    </div>
  );
};

export default Example;
