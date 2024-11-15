import React from "react";
import GlobalStyle from "../../globalStyles";
//import numeral from "numeral";
import { DatumId } from "@nivo/pie";

export interface Props {
  style?: object;
  label: string | React.ReactElement | DatumId;
  amount: number | string;
  unit?: string;
}

const tooltipStyle = {
  background: "white",
  borderRadius: "2px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
  padding: "5px 9px",
};

const CustomToolTip: React.FC<Props> = ({
  style=tooltipStyle,
  body=null
}) => {
  return (
    <>
      <GlobalStyle />
      <div style={style}>
        { body || <span>Custom tooltip</span> }
      </div>
    </>
  );
};


// const NULL = "0";
// const NUM = "0,0[.]00";
// const formatNumGlobal = (num) => (num ? numeral(num).format(NUM) : NULL);

// const CustomToolTip = function CustomTooltip(_ref, style) {
//   //const { formatNumGlobal } = useFormat()
//   const label = _ref?.label || _ref?.datum?.label || _ref?.point?.serieId,
//     source = _ref?.source?.label,
//     target = _ref?.target?.label,
//     value = _ref?.value || _ref?.datum?.value || _ref?.point?.data?.y,
//     unit = _ref?.data?.unit || _ref?.datum?.data?.unit || _ref?.unit;
//   const text = label !== undefined ? label : `${source} > ${target}`;
//   // const style = (source !== undefined) ? {} : {
//   //   background: 'white',
//   //   borderRadius: '2px',
//   //   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
//   //   padding: '5px 9px'
//   // }

//   return (
//     <div style={style !== null ? style : tooltipStyle}>
//       {text}: {formatNumGlobal(Math.abs(value))} {unit}
//     </div>
//   );
// };

export default CustomToolTip;
