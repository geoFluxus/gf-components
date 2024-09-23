import { Radio, RadioGroupProps, ConfigProvider } from 'antd';
import type { RadioChangeEvent } from 'antd';
import GlobalStyle from '../../globalStyles';
import styled from "styled-components"

interface ButtonT {
  key: string | number;
  label: string;
  disabled?: boolean;
}

export interface ButtonControlsProps extends RadioGroupProps {
  content: ButtonT[];
  handler: (e: RadioChangeEvent) => void;
  disabled?: boolean;
};

const StyledButtonGroup = styled(Radio.Group)`
`
const StyledButton = styled(Radio.Button)`
  height: 24px;
  font: var(--gf-label-md-default);
  color: --gf-color-text-primary;
`

const ButtonControls: React.FC<ButtonControlsProps> = ({
  content,
  handler,
  disabled=false,
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              borderRadius: 2,
              colorBorder: '#EAECF0',
              colorPrimary: '#152BEE',
            },
          },
        }}
      >
        <StyledButtonGroup
          disabled={disabled}
          onChange={handler}
          defaultValue={0}
          {...props}
        >
          {content.map(dt => (
            <StyledButton key={`gf-control-button-${dt.key}`} value={dt.key} disabled={dt.disabled}>{dt.label}</StyledButton>
          ))}
        </StyledButtonGroup>
      </ConfigProvider>
    </>
  )
}

export default ButtonControls