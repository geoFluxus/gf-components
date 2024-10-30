import React from "react";
import GlobalStyle from "../../globalStyles";

export interface Props {
  style?: object;
  label: string;
  amount: number;
  unit: string;
}

const tooltipStyle = {
  background: "white",
  borderRadius: "2px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
  padding: "5px 9px",
};

const CustomToolTip: React.FC<Props> = ({
  style = tooltipStyle,
  label,
  amount,
  unit,
}) => {
  return (
    <>
      <GlobalStyle />

      <div style={style}>
        {label}: {amount} {unit}
      </div>
    </>
  );
};

export default CustomToolTip;
