import React from "react";
import Link from '../Link'

const Example = ({
  label,
  href,
  icon,
  type,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        background: type === 'light' ? '#03052D' : 'white',
      }}
    >
      <Link label={label} icon={icon} href={href} type={type} {...props}/>
    </div>
  );
};

export default Example;