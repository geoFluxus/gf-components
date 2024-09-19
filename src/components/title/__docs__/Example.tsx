import React from "react";
import Title from '../Title'

const Example = ({
  title,
  subtitle,
  type,
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
      <Title title={title} subtitle={subtitle} type={type}/>
    </div>
  );
};

export default Example;