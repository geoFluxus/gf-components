import React, { FC } from "react";
import GFMetricsGrid from '../GFMetricsGrid'

const Example= ({metricsData}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <GFMetricsGrid metricsData={metricsData}/>
    </div>
  );
};

export default Example;