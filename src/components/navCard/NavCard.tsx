import React, { MouseEventHandler, CSSProperties, useState } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd';
import { globals } from '../../globals';

export type NavCardProps = {
  icon?: any;
  title?: string;
  description: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const NavCard: React.FC<NavCardProps> = ({
  disabled=false,
  icon=InfoCircleOutlined,
  title='Title',
  description,
  onClick,
  ...props
}) => {
  const [ hover, setHover ] = useState<boolean>(false)
  const style: CSSProperties = {
    backgroundColor: globals.style.colorBgBase,
    border: `1px solid ${hover? globals.style.colorPrimaryHover : globals.style.colorBorder}`,
    borderRadius: globals.style.radiusSm,
    padding: globals.style.paddingMd,
  }

  return (
    <div 
      style={style}
      onClick={() => onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Row>
        <Col span={1}>
          {icon}
        </Col>
        <Col span={20}>
          {title}
        </Col>
      </Row>
      <Row>
        <Col span={1} />
        <Col span={20}>
          {description}
        </Col>
      </Row>
    </div>
  )
}

export default NavCard