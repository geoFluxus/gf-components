import { MouseEventHandler } from 'react'
import GlobalStyle from '../../globalStyles';
import { Button, ButtonProps } from 'antd';
import styled, { css } from "styled-components"

export interface GFButtonProps extends ButtonProps {
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled(Button)<GFButtonProps>`
  border-radius: var(--gf-radius-sm);
  ${props => props.type === 'primary' && css`
    background: var(--gf-color-button-primary);
  `}
`

const GFButton: React.FC<GFButtonProps> = ({
  type='default',
  disabled=false,
  onClick,
  ...props
}) => {

  return (
    <>
      <GlobalStyle />
      <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
      />
    </>
  )
}

export default GFButton