import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from 'antd';
import classNames from 'classnames';
import './GFButton.css'

export interface GFButtonProps extends ButtonProps {
  text?: string;
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const GFButton: React.FC<GFButtonProps> = ({
  type='default',
  disabled=false,
  text,
  onClick,
  ...props
}) => {
  const classes = classNames(
    'gf-button',
    {
      'gf-button-primary': type === 'primary',
    },
    props?.className,
  )

  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {text}
    </Button>
  )
}

export default GFButton