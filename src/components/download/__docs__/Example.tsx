import React, { FC } from "react";
import Download, { DownloadProps} from "../Download";

const Example: FC<DownloadProps> = ({
  disabled = false,
  onClick = () => {},
  label = "Download",
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
      <Download
        label={label}
        disabled={disabled}
        onClick={onClick}
        {...props}
      />
    </div>
  );
};

export default Example;