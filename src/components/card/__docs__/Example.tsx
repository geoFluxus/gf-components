import React, { FC } from "react";
import GFCard from "../GFCard";

const Example = ({
  cardtype,
  title,
  children,
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
      <GFCard cardtype={cardtype} title={title}>
        {children}
      </GFCard>
    </div>
  );
};

export default Example;