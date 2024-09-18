import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from 'antd';
import styled, { css } from "styled-components"
import '../../globals.css'

export interface GFButtonProps extends ButtonProps {
  label?: React.ReactNode;
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled(Button)<GFButtonProps>`
  border-radius: var(--gf-radius-sm);
  // background: ${props => props.type === 'primary' ? 'var(--gf-color-button-primary)' : ''};
  ${props => props.type === 'primary' && css`
    background: var(--gf-color-button-primary);
  `}
`

const GFButton: React.FC<GFButtonProps> = ({
  type='default',
  disabled=false,
  label,
  onClick,
  ...props
}) => {

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

export default GFButton