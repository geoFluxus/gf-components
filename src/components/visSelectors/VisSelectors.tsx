import GlobalStyle from "../../globalStyles";
import { Flex, Select } from "antd";
import { GFCard } from "../card";
import styled from "styled-components";
import { GFCardProps } from "../card/GFCard";

const Title = styled.h3`
  color: var(--gf-color-button-primary);
`;

export interface VisSelectorsProps extends GFCardProps {
  isOneSelector: boolean;
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

const optipns_ProcMethods = [
  { label: "Alle verwerkings", value: "Alle verwerkings" },
  { label: "bewaren", value: "bewaren" },
  { label: "recyclen", value: "recyclen" },
  { label: "hergebruiken", value: "hergebruiken" },
  { label: "verbranden", value: "verbranden" },
  { label: "storten", value: "storten" },
];

const VisSelectors: React.FC<VisSelectorsProps> = ({ isOneSelector }) => {
  return (
    <>
      <GlobalStyle />
      <GFCard cardtype="default">
        <Flex gap={8}>
          <Flex vertical>
            <Title>Selecteer industrie:</Title>
            <Select
              defaultValue="Alle industrieen"
              style={{ width: "100vh" }}
              onChange={(value) => alert(`Option ${value} selected`)}
              options={options_Industries}
            />
          </Flex>

          {!isOneSelector && (
            <Flex vertical>
              <Title>Selecteer verwerkingsmethode:</Title>
              <Select
                defaultValue="Alle verwerkings"
                style={{ width: "100vh" }}
                onChange={(value) => alert(`Option ${value} selected`)}
                options={optipns_ProcMethods}
              />
            </Flex>
          )}
        </Flex>
      </GFCard>
    </>
  );
};

export default VisSelectors;
