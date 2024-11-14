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


const VisSelectors: React.FC<VisSelectorsProps> = ({ selectors, setter }) => {
  const span = 24 / selectors.length

  return (
    <>
      <GlobalStyle />
      <GFCard cardtype="default" style={{ width: "100%" }}>
        <Row gutter={20}>
          {selectors.map(s =>
              <Col span={span}>
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
      </GFCard>
    </>
  );
};

export default VisSelectors;
