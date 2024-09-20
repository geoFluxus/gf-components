import React from 'react'
import { Space, Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled from 'styled-components';

const { Text } = Typography

export interface Props {
  label: string;
  href: string;
  icon?: any;
  type?: 'light' | 'dark';
  placement?: 'left' | 'right';
}

const StyledLink = styled.a`
  text-decoration: none;
`
const StyledText = styled(Text)<{type?: 'light' | 'dark'}>`
  font: var(--gf-label-md-default);
  line-height: 150%;
  color: ${props => props.type === 'light' ? 'white' : 'var(--gf-color-text-secondary)'}
`

const Link: React.FC<Props> = ({
  label,
  href,
  icon,
  type,
  placement='left',
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledLink href={href} {...props}>
        <Space direction='horizontal' size={8} align='start'>
          { icon && placement==='left' && icon }
          <StyledText type={type}>{label}</StyledText>
          { icon && placement==='right' && icon }
        </Space>
      </StyledLink>
    </>
  )
}

export default Link