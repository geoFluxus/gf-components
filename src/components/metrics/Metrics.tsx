import React from 'react'
import { Flex, Space, CardProps } from 'antd';
import GFCard, { GFCardProps } from '../card/GFCard';
import './Metrics.css'

export interface Props extends GFCardProps {
  percent: number | string;
  cost?: number | string;
  description?: string ;
}

const Metrics = ({
  percent,
  cost,
  description,
  ...props
}) => {
  return (
    <GFCard className='gf-metrics' cardType={'grey'}>
      <Flex vertical gap={8}>
        <Space direction='horizontal' size={16} align='end'>
          <text className='gf-value-bold'>{`${percent}%`}</text>
          <text className='gf-cost-italic'>{`€${cost} md`}</text>
        </Space>
        <text className='gf-metrics-description'>{description}</text>
      </Flex>
    </GFCard>
  )
}

export default Metrics