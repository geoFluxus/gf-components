import GlobalStyle from "../../globalStyles";
import { Col, Row, Select } from "antd";
import { GFCard } from "../card";
import styled from "styled-components";
import { GFCardProps } from "../card/GFCard";
import { ChangeEvent } from "react";

const Title = styled.h3`
  color: var(--gf-color-button-primary);
`;

export interface VisSelectorsProps extends GFCardProps {
  isOneSelector: boolean;
  setter: (value: string) => void;
}

const options_Industries = [
  { value: "Alle industrieen", label: "Alle industrieen" },
  { label: "Chemie Energie", value: "Chemie Energie" },
  { label: "Afval Beheer", value: "Afval Beheer" },
  { label: "Onbekend", value: "Onbekend" },
  { label: "Metaal Machine Elektronica", value: "Metaal Machine Elektronica" },
  { label: "Landbouw Veeteelt", value: "Landbouw Veeteelt" },
  { label: "Plastic Rubber Textiel", value: "Plastic Rubber Textiel" },
  { label: "Diversen", value: "Diversen" },
  { label: "Bouw Sloop", value: "Bouw Sloop" },
];

const options_ProcMethods = [
  { label: "Alle verwerkings", value: "Alle verwerkings" },
  { label: "bewaren", value: "bewaren" },
  { label: "recyclen", value: "recyclen" },
  { label: "hergebruiken", value: "hergebruiken" },
  { label: "verbranden", value: "verbranden" },
  { label: "storten", value: "storten" },
];

const VisSelectors: React.FC<VisSelectorsProps> = ({ isOneSelector, setter }) => {
  return (
    <>
      <GlobalStyle />
      <GFCard cardtype="default">
        <Row gutter={20}>
          <Col span={!isOneSelector ? 12 : 24}>
            <Title>Selecteer industrie:</Title>
            <Select
              defaultValue="Alle industrieen"
              style={{ width: "100%" }}
              onChange={(value) => {
                alert(`Option ${value} selected`);
                setter(value)
              }}
              options={options_Industries}
            />
          </Col>

          {!isOneSelector && (
            <Col span={12}>
              <Title>Selecteer verwerkingsmethode:</Title>
              <Select
                defaultValue="Alle verwerkings"
                style={{ width: "100%" }}
                onChange={(value) => alert(`Option ${value} selected`)}
                options={options_ProcMethods}
              />
            </Col>
          )}
        </Row>
      </GFCard>
    </>
  );
};

export default VisSelectors;
