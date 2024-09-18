import React, { FC } from "react";
import GFCard from "../GFCard";

const Example = ({
  cardType,
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
      <GFCard cardType={cardType} title={title}>
        {children}
      </GFCard>
    </div>
  );
};

export default Example;