import React, { useState } from 'react'
import { Flex, Space, Typography } from 'antd';
import GFCard, { GFCardProps } from '../card/GFCard';
import './Metrics.css'

const { Paragraph, Text } = Typography
export interface MetricsProps extends GFCardProps {
  percent: number | string;
  cost?: number | string;
  description?: string ;
  editable?: boolean | any;
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
    <GFCard className='gf-metrics' cardtype={'grey'} {...props}>
      <Flex vertical gap={8}>
        <Space direction='horizontal' size={16} align='end'>
          <Text className='gf-value-bold'>{`${percent}%`}</Text>
          <Text className='gf-cost-italic'>{`€${cost} md`}</Text>
        </Space>
        <Paragraph className='gf-metrics-description' editable={edit}>
          {editableText}
        </Paragraph>
      </Flex>
    </GFCard>
  )
}

export default Metrics