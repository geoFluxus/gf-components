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
  const iconWrapper =
    <div style={{
        width: 16,
        height: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {icon}
    </div>

  return (
    <>
      <GlobalStyle />
      <StyledLink href={href} {...props}>
        <Space direction='horizontal' size={8} align='center'>
          { icon && placement==='left' && iconWrapper }
          <StyledText type={type}>{label}</StyledText>
          { icon && placement==='right' && iconWrapper }
        </Space>
      </StyledLink>
    </>
  )
}

export default Link