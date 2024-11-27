import React from "react";
import Trends from "../Trends";

const Example = ({ data, xLeg, yLeg, tooltip }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Trends trendsData={data} xLeg={xLeg} yLeg={yLeg} tooltip={tooltip}/>
    </div>
  );
};

export default Example;
