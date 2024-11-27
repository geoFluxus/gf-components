import React from "react";
import TreeMap from "../TreeMap";

const Example = ({ data, tooltip }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TreeMap treeMapData={data} tooltip={tooltip}/>
    </div>
  );
};

export default Example;
