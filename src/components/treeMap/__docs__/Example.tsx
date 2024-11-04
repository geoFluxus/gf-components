import React from "react";
import TreeMap from "../TreeMap";

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
      <TreeMap treeMapData={data} />
    </div>
  );
};

export default Example;
