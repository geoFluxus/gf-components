export default function Arrow({
  color = "white",
  rotate = 0,
  style,
  className
}) {
  return (
    <svg
      viewBox="0 0 33 8"
      preserveAspectRatio="none"
      className={className}
      style={{
        height: 8,
        width: "100%",
        overflow: "visible",
        transform: `translateY(-40%) rotate(${rotate}deg)`,
        ...style
      }}
    >
      <path
        d="M28.4648 0.146446C28.6601 -0.0488153 28.9766 -0.0488156 29.1719 0.146446L32.3535 3.32809C32.5488 3.52335 32.5488 3.83986 32.3535 4.03512L29.1719 7.21676C28.9766 7.41202 28.6601 7.41202 28.4648 7.21676C28.2696 7.0215 28.2696 6.70499 28.4648 6.50973L30.793 4.1816H0V3.1816H30.793L28.4648 0.853478C28.2696 0.658215 28.2696 0.341709 28.4648 0.146446Z"
        fill={color}
      />
    </svg>
  );
}