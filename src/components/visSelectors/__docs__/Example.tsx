import React, { FC } from "react";
import VisSelectors from "../VisSelectors";

const Example = ({ isOneSelector }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <VisSelectors isOneSelector={isOneSelector} />
    </div>
  );
};

export default Example;
