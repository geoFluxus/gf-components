import React from "react";
import PieChart from "../PieChart";

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
      <PieChart
        {...props}
      />
    </div>
  );
};

export default Example;
