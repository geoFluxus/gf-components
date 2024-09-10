import React, { FC } from "react";
import GFButton, { GFButtonProps } from "../GFButton";

const Example: FC<GFButtonProps> = ({
  disabled = false,
  onClick = () => {},
  type = 'default',
  label = "Button",
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
      <GFButton
        label={label}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Example;