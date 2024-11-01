import React from "react";
import { CustomToolTip } from "..";

const Example = ({ style, label, amount, unit }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CustomToolTip style={style} label={label} amount={amount} unit={unit}/>
    </div>
  );
};

export default Example;
