import React, { FC } from "react";
import Card from "../Card";
import '../Card.css'

const Example = ({
  cardType,
  title = 'Title',
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex fa.',
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