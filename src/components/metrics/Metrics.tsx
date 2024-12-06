import React, { useState } from 'react'
import { Flex, Space, Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled from 'styled-components';
import GFCard, { GFCardProps } from '../card/GFCard';

const { Paragraph, Text } = Typography
export interface MetricsProps extends GFCardProps {
  percent: number | string;
  cost?: number | string;
  description?: string ;
  editable?: boolean | any;
}

const StyledCard = styled(GFCard)<GFCardProps>`
  min-width: 226px;
`
const StyledTitle = styled(Text)`
  font: var(--gf-header-h1);
`
const StyledItalic = styled(Text)`
  font: var(--gf-label-md-italic);
  color: var(--gf-color-text-tertiary);
`
const StyledText = styled(Text)`
  font: var(--gf-label-lg-default);
  color: var(--gf-color-text-secondary);
`

const Metrics: React.FC<MetricsProps> = ({
  percent,
  cost,
  description,
  editable,
  ...props
}) => {
  const [ editableText, setEditableText ] = useState(description)
  const edit = editable ? { onChange: setEditableText } : false

  return (
    <>
      <GlobalStyle />
      <StyledCard cardtype='grey' padding={24} {...props}>
        <Flex vertical gap={8}>
            <Space direction='horizontal' size={16} align='end'>
              <StyledTitle>{percent}</StyledTitle>
              <StyledItalic>{cost}</StyledItalic>
            </Space>
            <StyledText editable={edit}>
              {editableText}
            </StyledText>
          </Flex>
      </StyledCard>
    </>
  )
}

export default Metrics