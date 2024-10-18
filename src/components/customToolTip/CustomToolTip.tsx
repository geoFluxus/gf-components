import React from "react";
import GlobalStyle from "../../globalStyles";

export interface Props {
  style: object;
  label: string;
  amount: number;
  unit: string;
}

const CustomToolTip: React.FC<Props> = ({style, label, amount, unit}) => {
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
