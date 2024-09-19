import React, { CSSProperties, useState } from 'react'
import { Typography } from 'antd';
import classNames from 'classnames';
import './Description.css'

const { Text } = Typography
export interface Props {
  text: string;
  columns?: 2 | 3 | 4;
  editable?: boolean;
  style?: CSSProperties | undefined;
  className?: string;
}

const Description: React.FC<Props> = ({
  text,
  columns=2,
  editable=false,
  style,
  className,
}) => {
  const [ editableText, setEditableText ] = useState(text)
  const edit = editable ? { onChange: setEditableText } : false

  const classes = classNames(
    `gf-description-${columns}`,
    className
  )

  return (
    <div className={classes} style={style || {}}>
      <Text className='gf-description-body' editable={edit}>{editableText}</Text>
    </div>
  )
}

export default Description