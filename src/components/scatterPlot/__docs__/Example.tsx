import React from "react";
import { ScatterPlot } from "..";

const Example = ({ data, extra }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ScatterPlot scatterPlotData={data} extraLayer={extra}/>
    </div>
  );
};

export default Example;
