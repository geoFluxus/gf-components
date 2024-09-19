import { Card, CardProps } from 'antd'
import styled, { css } from 'styled-components';
import '../../globals.css'

export interface GFCardProps extends CardProps {
  cardtype?: "default" | "grey" | 'debug' | undefined;
}

const GFCard = styled(Card)<GFCardProps>`
  border-radius: var(--gf-radius-sm);
  border-color: var(--gf-color-border-base);
  ${props => props.cardtype === ('default' || undefined) && css`
    background: var(--gf-color-bg-base);
  `}
  ${props => props.cardtype === 'grey' && css`
    background: var(--gf-color-bg-tertiary);
  `}
  ${props => props.cardtype === 'debug' && css`
    background: var(--gf-color-bg-debug);
  `}
`

export default GFCard