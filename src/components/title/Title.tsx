import React from 'react'
import { Space, Typography } from 'antd';
import classNames from 'classnames';
import '../../globals.css'
import './Title.css'

const { Text } = Typography
export interface Props {
  title: string;
  subtitle?: string | undefined;
  type?: 'primary' | 'secondary';
}

const Metrics: React.FC<Props> = ({
  title,
  subtitle,
  type='primary',
}) => {
  const titleClasses = classNames(
    {
      'gf-title-primary': type === 'primary',
      'gf-title-secondary': type === 'secondary',
    },
  )
  const subTitleClasses = classNames(
    {
      'gf-subtitle-primary': type === 'primary',
      'gf-subtitle-secondary': type === 'secondary',
    },
  )

  return (
    <Space className='gf-full-width' direction='vertical' size={8} align='start'>
      <Text className={titleClasses}>{title}</Text>
      <Text className={subTitleClasses}>{subtitle}</Text>
    </Space>
  )
}

export default Metrics