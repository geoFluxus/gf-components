import React, { FC } from "react";
import { InfoCircleOutlined } from '@ant-design/icons'
import NavCard, { NavCardProps } from "../NavCard";

const Example: FC<NavCardProps> = ({
  disabled = false,
  onClick = () => {},
  icon=<InfoCircleOutlined />,
  title= "Navigation Card",
  description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex fa.',
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <NavCard
        icon={<InfoCircleOutlined />}
        title={title}
        description={description}
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  );
};

export default Example;