export default function Arrow({
  color = "#667085",
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
        alignItems: "center",
        width: "100%",
        height: 8,
        overflow: "visible",
        transform,
        position: "relative",
        ...style,
      }}
    >
      {/* Vertical line (centered on shaft) */}
      {showVerticalLine && (
        <svg
          viewBox="0 0 1 16"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 1,
            height: 16,
          }}
        >
          <rect x="0" y="0" width="1" height="16" fill={color} />
        </svg>
      )}

      {/* Shaft */}
      <svg
        viewBox="0 0 1 8"
        preserveAspectRatio="none"
        style={{ flex: 1, height: 8 }}
      >
        <rect x="0" y="3.5" width="1" height="1" fill={color} />
      </svg>

      {/* Arrow head */}
      <svg
        viewBox="0 0 4 8"
        preserveAspectRatio="xMinYMid meet"
        style={{
          width: 4,
          height: 8,
          flex: "0 0 4px",
          marginLeft: -3,
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