import React from "react";
import { Description } from "..";

const Example = ({
  text,
  columns,
  editable,
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
      <Description text={text} columns={columns} editable={editable}/>
    </div>
  );
};

export default Example;