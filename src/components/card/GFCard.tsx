import { Card, CardProps } from 'antd'
import styled, { css } from 'styled-components';
import '../../globals.css'

export interface GFCardProps extends CardProps {
  cardType?: "default" | "grey" | 'debug' | undefined;
}

const GFCard = styled(Card)<GFCardProps>`
  border-radius: var(--gf-radius-sm);
  border-color: var(--gf-color-border-base);
  ${props => props.cardType === ('default' || undefined) && css`
    background: var(--gf-color-bg-base);
  `}
  ${props => props.cardType === 'grey' && css`
    background: var(--gf-color-bg-tertiary);
  `}
  ${props => props.cardType === 'debug' && css`
    background: var(--gf-color-bg-debug);
  `}
`

export default GFCard