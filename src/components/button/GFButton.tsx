import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from 'antd';
import classNames from 'classnames';
import './GFButton.css'

export interface GFButtonProps extends ButtonProps {
  label?: React.ReactNode;
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const GFButton: React.FC<GFButtonProps> = ({
  type='default',
  disabled=false,
  label,
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
      {...props}
      className={classes}
    >
      {label}
    </Button>
  )
}

export default GFButton