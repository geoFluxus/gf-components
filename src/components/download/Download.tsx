import React, { MouseEventHandler } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { GFButton } from '../button'
import { GFButtonProps } from '../button/GFButton'

export interface DownloadProps extends GFButtonProps {
  label?: React.ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Download: React.FC<DownloadProps> = ({
  disabled=false,
  label='Download',
  onClick,
  ...props
}) => {
  return (
    <GFButton
      type={'default'}
      icon={<DownloadOutlined />}
      iconPosition='start'
      disabled={disabled}
      onClick={onClick}
      label={label}
      {...props}
    />
  )
}

export default Download