import React, { FC } from "react";
import GFCard from "../GFCard";

const Example = ({
  cardtype,
  padding,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <GFCard cardtype={cardtype} padding={padding} {...props} />
    </div>
  );
};

export default Example;