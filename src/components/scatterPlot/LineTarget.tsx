const LineTarget = ({x1, x2, y1, y2}) => {
  return (
    // horizontal line representing the target value for comparison
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="red"
        stroke-width="3"
      ></line>
    </g>
  );
};

export default LineTarget;
