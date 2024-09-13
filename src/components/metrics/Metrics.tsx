import React, { useState } from 'react'
import { Flex, Space, Typography } from 'antd';
import GFCard, { GFCardProps } from '../card/GFCard';
import './Metrics.css'

const { Paragraph } = Typography
export interface MetricsProps extends GFCardProps {
  percent: number | string;
  cost?: number | string;
  description?: string ;
  editable?: boolean;
}

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
    <GFCard className='gf-metrics' cardType={'grey'} {...props}>
      <Flex vertical gap={8}>
        <Space direction='horizontal' size={16} align='end'>
          <text className='gf-value-bold'>{`${percent}%`}</text>
          <text className='gf-cost-italic'>{`€${cost} md`}</text>
        </Space>
        <Paragraph className='gf-metrics-description' editable={edit}>
          {editableText}
        </Paragraph>
      </Flex>
    </GFCard>
  )
}

export default Metrics