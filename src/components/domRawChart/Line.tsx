const Line = ({data, graph, stroke, strokeWidth, dashed}) => {
  return (
    // horizontal line representing the target value for comparison
    <g>
      <line
        x1={graph.xScale(data?.x1)}
        y1={graph.yScale(data?.y1)}
        x2={graph.xScale(data?.x2)}
        y2={graph.yScale(data?.y2)}
        stroke={stroke || "red"}
        strokeWidth={strokeWidth || 3}
        strokeDasharray={dashed ? "10, 5" : null}
      />
    </g>
  );
};

export default Line
