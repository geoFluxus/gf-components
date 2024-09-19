import React, { MouseEventHandler } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Row, Col, Typography } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled from 'styled-components';
import GFCard, { GFCardProps } from '../card/GFCard';

const { Text } = Typography

export interface NavCardProps extends GFCardProps {
  icon?: any;
  title?: string;
  description: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

const StyledCard = styled(GFCard)`
  &:hover {
    cursor: pointer;
    border: 1px solid var(--gf-color-primary-hover);
    color: var(--gf-color-primary-hover);
  }
  
  svg:hover {
    fill: var(--gf-color-primary-hover);
  }
`
const StyledText = styled(Text)`
  font: var(--gf-header-h5);
  ${StyledCard}:hover & {
    color: var(--gf-color-primary-hover);
  }
`
const StyledDescription = styled(Text)`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
`

const NavCard: React.FC<NavCardProps> = ({
  disabled=false,
  icon=InfoCircleOutlined,
  title='Title',
  description,
  onClick,
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledCard onClick={onClick} cardtype='default' {...props}>
        <Row gutter={16}>
          <Col span={1}>
            {icon}
          </Col>
          <Col span={23}>
            <StyledText >
              {title}
            </StyledText>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={1} />
          <Col span={23}>
            <StyledDescription >
              {description}
            </StyledDescription>
          </Col>
        </Row>
      </StyledCard>
    </>
  )
}

export default NavCard