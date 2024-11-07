import React, { CSSProperties } from 'react'
import GlobalStyle from '../../globalStyles';
import styled, {css} from 'styled-components';


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
  font: var(--gf-label-lg-default);
  color: var(--gf-color-text-secondary);
`

const Description: React.FC<Props> = ({
  text,
  columns,
  textalign='left',
  style,
  className,
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledDiv
        columns={columns}
        textalign={textalign}
        style={style || {}} className={className || ''}
        dangerouslySetInnerHTML={{__html:text}}
      />
    </>
  )
}

export default Description