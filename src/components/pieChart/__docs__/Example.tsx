import React from "react";
import PieChart from "../PieChart";

const Example = ({ data, title, isEmpty, tooltip }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <PieChart
        pieChartData={data}
        title={title}
        isEmpty={isEmpty}
        tooltip={tooltip}
      />
    </div>
  );
};

export default Example;
