import React from "react";
import TreeMap from "../TreeMap";

const Example = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TreeMap {...props} />
    </div>
  );
};

export default Example;
