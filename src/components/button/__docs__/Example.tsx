import React, { FC } from "react";
import GFButton, { GFButtonProps } from "../GFButton";

const Example: FC<GFButtonProps> = ({
  disabled = false,
  onClick = () => {},
  type = 'default',
  text = "Button",
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
      <GFButton
        text={text}
        disabled={disabled}
        onClick={onClick}
        type={type}
      />
    </div>
  );
};

export default Example;