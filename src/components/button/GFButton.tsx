import React, { MouseEventHandler } from 'react'
import { Button, ButtonProps } from 'antd';
import styled, { css } from "styled-components"
import '../../globals.css'

export interface GFButtonProps extends ButtonProps {
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const GFButton = styled(Button)<GFButtonProps>`
  border-radius: var(--gf-radius-sm);
  // background: ${props => props.type === 'primary' ? 'var(--gf-color-button-primary)' : ''};
  ${props => props.type === 'primary' && css`
    background: var(--gf-color-button-primary);
  `}
`

export default GFButton