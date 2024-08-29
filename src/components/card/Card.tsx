import React from 'react'
import { Card as AntCard, CardProps as AntCardProps } from 'antd'
import './Card.css'

export interface CardProps extends AntCardProps {
  cardType?: "default" | "grey" | undefined;
}

const Card: React.FC<CardProps> = ({
  cardType,
  ...props
}) => {
  return (
    <AntCard className={cardType === ('default' || undefined) ? 'gf-card-default' : 'gf-card-grey'} {...props} />
  )
}

export default Card