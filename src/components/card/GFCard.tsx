import React from 'react'
import { Card, CardProps } from 'antd'
import classNames from 'classnames';
import './GFCard.css'

export interface GFCardProps extends CardProps {
  cardType?: "default" | "grey" | undefined;
}

const GFCard: React.FC<GFCardProps> = ({
  cardType,
  ...props
}) => {
  const classes = classNames(
    {
      'gf-card-default': cardType === ('default' || undefined),
      'gf-card-grey': cardType === 'grey',
    },
    props?.className,
  )

  return (
    <Card {...props} className={classes} />
  )
}

export default GFCard