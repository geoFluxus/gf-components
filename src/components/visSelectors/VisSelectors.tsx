import GlobalStyle from "../../globalStyles";
import { Col, Row, Select } from "antd";
import { GFCard } from "../card";
import styled from "styled-components";
import { GFCardProps } from "../card/GFCard";

const Title = styled.h3`
  color: var(--gf-color-button-primary);
`;

export interface VisSelectorsProps extends GFCardProps {
  isOneSelector: boolean;
  setter: (value: string) => void;
}


const VisSelectors: React.FC<VisSelectorsProps> = ({ selectors, setter, style }) => {
  const span = 24 / selectors.length

  return (
    <>
      <GlobalStyle />
        <Row gutter={20} style={{width: "100%", ...style}}>
          {selectors.map((s, idx) =>
              <Col span={span} key={`col-${idx}`}>
                <Title>{s.title}</Title>
                <Select
                  defaultValue={s.defaultValue}
                  style={{ width: "100%" }}
                  onChange={(value) => {
                    setter(s.key, value)
                  }}
                  options={s.options}
                />
              </Col>
          )}
        </Row>
    </>
  );
};

export default VisSelectors;
