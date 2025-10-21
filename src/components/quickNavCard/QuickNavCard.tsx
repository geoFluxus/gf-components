import React from 'react';
import { Button, Flex, Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled, { css } from 'styled-components';
import GFCard, { GFCardProps } from '../card/GFCard';
import { Title } from '../title';
import { Description } from '../description'

interface ItemProps {
  name: string;
  href: React.MutableRefObject<any> | string;
}
export interface QuickNavCardProps extends GFCardProps {
  title: string;
  subtitle?: string;
  listTitle?: string;
  items: ItemProps[];
  gap?: number;
}

const { Text } = Typography

const StyledCard = styled(GFCard)<GFCardProps>`
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
const StyedText = styled(Text)`
  font: var(--gf-header-h5);
  color: var(--gf-color-text-primary);
  font-weight: bold;
`
  const StyledButton = styled(Button)`
  height: 22px;
  padding: 0px;
  font: var(--gf-label-md-default);
  color: var(--gf-color-button-primary);
  text-decoration-line: underline;
`

const QuickNavCard: React.FC<QuickNavCardProps> = ({
  title,
  subtitle,
  text,
  listTitle,
  items,
  gap,
  ...props
}) => {
  const handleClick = (ref) => {
    if (typeof(ref) !== 'string') {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - (gap || 0);
      window.scroll({top: y, behavior: 'smooth'});
    }
	}

  return (
    <>
      <GlobalStyle />
      <StyledCard 
        cardtype={'default'}
        {...props}
      >
        <Flex vertical gap={24} style={{alignItems: 'start'}}>
            <Title title={title} subtitle={subtitle} type='header'/>
            {text}
        </Flex>
        <div style={{borderBottom: '1px solid #f0f0f0', margin: '32px -32px 32px -32px'}} />
        <Flex vertical gap={8} style={{alignItems: 'start'}}>
          <StyedText>{listTitle || 'Table of contents'}</StyedText>
          {items.map((item, i) =>
            <StyledButton
              key={`button-select-item-${i}`}
              type='link'
              href={typeof(item.href) === 'string' ? item.href : undefined}
              onClick={() => handleClick(item.href)}
            >
              {item.name}
            </StyledButton>
          )}
        </Flex>
      </StyledCard>
    </>
  )
}

export default QuickNavCard