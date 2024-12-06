import React, { CSSProperties } from 'react'
import GlobalStyle from '../../globalStyles';
import styled, {css} from 'styled-components';


export interface Props {
  text: string[];
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
  column-gap: 40px;
`
const StyledText = styled.div`
  font: var(--gf-label-lg-default);
  color: var(--gf-color-text-secondary);
  margin-bottom: 1em;
`

const Description: React.FC<Props> = ({
  id,
  text,
  columns,
  textalign='justify',
  style,
  className,
  editable
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledDiv
        id={id}
        columns={columns}
        textalign={textalign}
        style={style || {}}
        className={className || ''}
        contentEditable={editable}
        suppressContentEditableWarning={editable}
      >
        {text?.map((paragraph, idx) =>
            <StyledText
                key={`${id}-${idx}`}
                dangerouslySetInnerHTML={{__html: paragraph}}
            />
        )}
      </StyledDiv>
    </>
  )
}

export default Description