import React, { FC } from "react";
import Card from "../Card";
import '../Card.css'

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
      <Card cardType={cardType} title={title}>
        {children}
      </Card>
    </div>
  );
};

export default Example;