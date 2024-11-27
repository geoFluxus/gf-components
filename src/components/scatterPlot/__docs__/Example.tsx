import React from "react";
import ScatterPlot from "../ScatterPlot";

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
      <ScatterPlot scatterPlotData={data} tooltip={tooltip}/>
    </div>
  );
};

export default Example;
