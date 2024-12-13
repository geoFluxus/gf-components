const Line = ({data, graph, stroke, strokeWidth, dashed}) => {
  return (
    // horizontal line representing the target value for comparison
    <g>
      <line
        x1={0}
        y1={graph.yScale(data?.value)}
        x2={graph.innerWidth}
        y2={graph.yScale(data?.value)}
        stroke={stroke || "red"}
        strokeWidth={strokeWidth || 3}
        strokeDasharray={dashed ? "10, 5" : null}
      />
    </g>
  );
};

export default Line
