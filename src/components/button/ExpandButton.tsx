import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import GFButton, { GFButtonProps} from "./GFButton";

const ExpandButton: React.FC<GFButtonProps> = ({
  disabled=false,
  onClick,
  ...props
}) => {
  const [ opened, setOpened ] = useState<boolean>(false)

  const handleClick = () => {
    setOpened(prev => !prev)
    onClick
  }

  return (
    <>
      <GFButton
        type={'link'}
        disabled={disabled}
        onClick={handleClick}
        icon={opened ? <UpOutlined /> : <DownOutlined />}
        iconPosition={'end'}
        {...props}
      />
    </>
  )
}

export default ExpandButton