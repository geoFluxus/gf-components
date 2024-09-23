import React, { FC } from "react";
import ButtonControls, { ButtonControlsProps } from "../ButtonControls";

const Example: FC<ButtonControlsProps> = ({
  content,
  handler,
  disabled=false,
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
      <ButtonControls
        content={content}
        handler={handler}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Example;