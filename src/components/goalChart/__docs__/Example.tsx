import React from "react";
import GoalChart from "../GoalChart";


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
        <GoalChart {...props} />
    </div>
  );
};

export default Example;
