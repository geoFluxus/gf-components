import React, { CSSProperties, useState } from 'react'
import { Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled from 'styled-components';

const { Text } = Typography
export interface Props {
  text: string;
  columns?: 2 | 3 | 4;
  editable?: boolean;
  style?: CSSProperties | undefined;
  className?: string;
}

const StyledDiv = styled.div<{columns?: 2 | 3 | 4 }>`
  column-count: ${props => props.columns}
`
const StyledText = styled(Text)`
  font: var(--gf-label-lg-default);
  color: var(--gf-color-text-secondary) ;
`

const Description: React.FC<Props> = ({
  text,
  columns=2,
  editable=false,
  style,
  className,
}) => {
  const [ editableText, setEditableText ] = useState(text)
  const edit = editable ? { onChange: setEditableText } : false

  return (
    <>
      <GlobalStyle />
      <StyledDiv columns={columns} style={style || {}} className={className || ''}>
        <StyledText editable={edit}>{editableText}</StyledText>
      </StyledDiv>
    </>
  )
}

export default Description