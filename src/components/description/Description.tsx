import React, { CSSProperties, useState } from 'react'
import { Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled, {css} from 'styled-components';

const { Text } = Typography
export interface Props {
  text: string;
  columns?: 2 | 3 | 4;
  editable?: boolean;
  style?: CSSProperties | undefined;
  textalign?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
}

const StyledDiv = styled.div<{columns?: 2 | 3 | 4, textalign?: 'left' | 'center' | 'right' | 'justify'}>`
  ${props => props.columns && props.columns > 1 && css`
    column-count: ${props.columns};
  `}
  text-align: ${props => props.textalign};
`
const StyledText = styled(Text)`
  font: var(--gf-label-lg-default);
  color: var(--gf-color-text-secondary) ;
`

const Description: React.FC<Props> = ({
  text,
  columns,
  editable=false,
  textalign='left',
  style,
  className,
}) => {
  const [ editableText, setEditableText ] = useState(text)
  const edit = editable ? { onChange: setEditableText } : false

  return (
    <>
      <GlobalStyle />
      <StyledDiv columns={columns} textalign={textalign} style={style || {}} className={className || ''}>
        <StyledText editable={edit}>{editableText}</StyledText>
      </StyledDiv>
    </>
  )
}

export default Description