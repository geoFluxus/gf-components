import React from "react";
import BenchmarkSankey from "../BenchmarkSankey";

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
