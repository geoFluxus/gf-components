import React from "react";
import DomRawChart from "../DomRawChart";


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
        <DomRawChart {...props} />
    </div>
  );
};

export default Example;
