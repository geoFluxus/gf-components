export default function Arrow({
  color = "white",
  transform = "",
  style,
  className,
  showVerticalLine = false,
}) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        width: "100%",
        height: 8,
        overflow: "visible",
        transform,
        ...style,
      }}
    >
      {/* Optional vertical line */}
      {showVerticalLine && (
        <svg
          viewBox="0 0 1 8"
          preserveAspectRatio="none"
          style={{ width: 1, height: 8, flex: "0 0 1px" }}
        >
          <rect x="0" y="0" width="1" height="8" fill={color} />
        </svg>
      )}

      {/* Shaft (stretchable) */}
      <svg
        viewBox="0 0 1 8"
        preserveAspectRatio="none"
        style={{ flex: 1, height: 8 }}
      >
        <rect x="0" y="3.5" width="1" height="1" fill={color} />
      </svg>

      {/* Small arrow head */}
      <svg
        viewBox="0 0 4 8"
        preserveAspectRatio="xMinYMid meet"
        style={{
          width: 4,
          height: 8,
          flex: "0 0 4px",
          marginLeft: -3, // overlap shaft slightly
        }}
      >
        <path
          d="M0 1 L3 4 L0 7"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}