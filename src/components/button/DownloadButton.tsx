import { DownloadOutlined } from '@ant-design/icons'
import GFButton, { GFButtonProps} from "./GFButton";

const DownloadButton: React.FC<GFButtonProps> = ({
  disabled=false,
  onClick,
  ...props
}) => {

  return (
    <>
      <GFButton
        type={'default'}
        disabled={disabled}
        onClick={onClick}
        icon={<DownloadOutlined />}
        iconPosition={'start'}
        children={'Download'}
        {...props}
      />
    </>
  )
}

export default DownloadButton