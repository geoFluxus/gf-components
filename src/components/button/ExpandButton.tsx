import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import GFButton, { GFButtonProps} from "./GFButton";

export interface ExpandButtonProps extends GFButtonProps {
  open: boolean;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({
  disabled=false,
  open,
  onClick,
  ...props
}) => {

  return (
    <>
      <GFButton
        type={'link'}
        disabled={disabled}
        onClick={onClick}
        icon={open ? <UpOutlined /> : <DownOutlined />}
        iconPosition={'end'}
        {...props}
      />
    </>
  )
}

export default ExpandButton