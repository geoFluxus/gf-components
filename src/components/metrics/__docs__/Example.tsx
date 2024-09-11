import React, { useState } from "react";
import Metrics from "../Metrics";
import '../Metrics.css'

const Example = ({
  percent,
  cost,
  description,
  editable,
  ...props
}) => {
  const [ editableText, setEditableText ] = useState(description)
  const edit = editable ? { onChange: setEditableText } : false

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Metrics 
        percent={percent} 
        cost={cost} 
        description={editableText}
        editable={edit}
      />
    </div>
  );
};

export default Example;