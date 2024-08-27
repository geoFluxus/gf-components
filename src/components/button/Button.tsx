import React, { MouseEventHandler } from 'react'
import { Button as Btn } from 'antd';

export type ButtonProps = {
  text?: string;
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  type='default',
  disabled=false,
  text,
  onClick,
  ...props
}) => {
  return (
    <Btn
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Btn>
  )
}

export default Button