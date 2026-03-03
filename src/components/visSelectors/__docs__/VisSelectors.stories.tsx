import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";


const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/VisSelectors",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

const options_Industries = [
    {
        label: 'Alle productgroepen',
        value: ''
    },
    {
        label: 'Bouw',
        value: 'bouw'
    },
    {
        label: 'Biomassa en Voedsel',
        value: 'biomassa'
    },
    {
        label: 'Maakindustrie',
        value: 'maakindustrie'
    },
    {
        label: 'Kunststoffen',
        value: 'kunststoffen'
    },
    {
        label: 'Consumptiegoederen',
        value: 'consumptie',
        children: [
            {
                label: 'Meubilair',
                value: 'consumptie_meubilair'
            },
            {
                label: 'Textiel',
                value: 'consumptie_textiel'
            },
            {
                label: 'AEEA',
                value: 'consumptie_aeea'
            },
            {
                label: 'Overig',
                value: 'consumptie_overig'
            }
        ]
    },
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
        defaultValue: "",
        isTree: true
    },
    {
        key: "procMethods",
        title: "Alle verwerkings",
        options: options_ProcMethods,
        defaultValue: ""
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
