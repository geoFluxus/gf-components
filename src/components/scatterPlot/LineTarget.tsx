const LineTarget = () => {
  return (
    // horizontal line representing the target value for comparison
    <g>
      <line
        x1="0"
        y1="90"
        x2="220"
        y2="220"
        stroke="red"
        stroke-width="3"
      ></line>
    </g>
  );
};

export default LineTarget;
