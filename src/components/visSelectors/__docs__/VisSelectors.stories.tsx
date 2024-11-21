import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";


const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/VisSelectors",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

const options_Industries = [
  { label: "Alle industrieen", value: "" },
  { label: "Chemie Energie", value: "chemie_energie" },
  { label: "Afval Beheer", value: "afval_beheer" },
  { label: "Onbekend", value: "onbekend" },
  { label: "Metaal Machine Elektronica", value: "metaal_machine_elektronica" },
  { label: "Landbouw Veeteelt", value: "landbouw_veeteelt" },
  { label: "Plastic Rubber Textiel", value: "plastic_rubber_textiel" },
  { label: "Diversen", value: "diversen" },
  { label: "Bouw Sloop", value: "bouw_sloop" },
];

const options_ProcMethods = [
  { label: "Alle verwerkings", value: "" },
  { label: "Bewaren", value: "bewaren" },
  { label: "Recyclen", value: "recyclen" },
  { label: "Hergebruiken", value: "hergebruiken" },
  { label: "Verbranden", value: "verbranden" },
  { label: "Storten", value: "storten" },
];

const selectors = [
    {
        key: "industries",
        title: "Selecteer industrie:",
        options: options_Industries,
        defaultValue: "Alle industrieen"
    },
    {
        key: "procMethods",
        title: "Alle verwerkings",
        options: options_ProcMethods,
        defaultValue: "Alle verwerkings"
    }
]

export const Default: Story = {
  args: { selectors: selectors },
};

export const oneVisSelector: Story = {
  args: { selectors: selectors.slice(0, 1) },
};

export const twoVisSelectors: Story = {
  args: { selectors: selectors },
};
