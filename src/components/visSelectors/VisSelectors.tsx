import GlobalStyle from "../../globalStyles";
import { Col, Row, Select, TreeSelect, Flex } from "antd";
import { GFCard } from "../card";
import styled from "styled-components";
import { GFCardProps } from "../card/GFCard";

const Title = styled.span`
  color: var(--gf-color-button-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
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
                <Flex
                    vertical
                    gap={10}
                >
                    <Title>{s.title}</Title>
                    <TreeSelect
                      defaultValue={s.defaultValue}
                      style={{ width: "100%" }}
                      onChange={(value) => {
                        setter(s.key, value);
                      }}
                      treeData={s.options}
                      treeDefaultExpandAll
                    />
                </Flex>
              </Col>
          )}
        </Row>
    </>
  );
};

export default VisSelectors;
