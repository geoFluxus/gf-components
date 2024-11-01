import React from "react";
import { ScatterPlot } from "..";

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
      <ScatterPlot scatterPlotData={data}/>
    </div>
  );
};

export default Example;
