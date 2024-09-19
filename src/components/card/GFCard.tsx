import { Card, CardProps } from 'antd'
import GlobalStyle from '../../globalStyles';
import styled, { css } from 'styled-components';

export interface GFCardProps extends CardProps {
  cardtype?: "default" | "grey" | 'debug' | undefined;
}

const StyledCard = styled(Card)<GFCardProps>`
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

const GFCard: React.FC<GFCardProps> = ({
  cardtype,
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledCard cardtype={cardtype} {...props} />
    </>
  )
}

export default GFCard