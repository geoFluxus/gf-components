import React, { FC } from "react";
import GFButton, { GFButtonProps } from "../GFButton";

const Example: FC<GFButtonProps> = ({
  disabled = false,
  onClick = () => {},
  type = 'default',
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
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Example;