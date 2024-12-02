const Line = ({data, layer}) => {
  return (
    // horizontal line representing the target value for comparison
    <g>
      <line
        x1={layer.xScale(data?.x1)}
        y1={layer.yScale(data?.y1)}
        x2={layer.xScale(data?.x2)}
        y2={layer.yScale(data?.y2)}
        stroke="red"
        strokeWidth="3"
      ></line>
    </g>
  );
};

export default Line
