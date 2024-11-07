import React from 'react'
import { Space, Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled, { css } from 'styled-components';

const { Text } = Typography
export interface Props {
  title: string;
  subtitle?: string;
  type?: 'primary' | 'secondary' | 'header';
  align?: 'start' | 'end' | 'center' | 'baseline';
}

const StyledTitle = styled(Text)<{type?: string}>`
  color: var(--gf-color-text-primary) !important;  
  ${props => props.type === ('primary' || undefined ) && css`
    font: var(--gf-header-h2);
  `}
  ${props => props.type === 'secondary' && css`
    font: var(--gf-header-h4);
  `}
  ${props => props.type === 'header' && css`
    font: var(--gf-header-h1);
  `}
`
const StyledSubTitle = styled(Text)<{type?: string}>`
  ${props => props.type === ('primary' || undefined ) && css`
    font: var(--gf-label-xl-default);
    color: var(--gf-color-text-primary) !important;
  `}
  ${props => props.type === 'secondary' && css`
    font: var(--gf-label-lg-default);
    color: var(--gf-color-text-secondary) !important;
  `}
  ${props => props.type === 'header' && css`
    font: var(--gf-label-xl-default);
    color: var(--gf-color-text-secondary) !important;
  `}
`

const Title: React.FC<Props> = ({
  title,
  subtitle,
  type='primary',
  align='start'
}) => {
  return (
    <>
      <GlobalStyle />
      <Space className='gf-full-width' direction='vertical' size={8} align={align}>
        <StyledTitle type={type}>{title}</StyledTitle>
        <StyledSubTitle type={type}>{subtitle}</StyledSubTitle>
      </Space>
    </>
  )
}

export default Title