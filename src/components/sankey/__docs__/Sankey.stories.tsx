import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/Sankey",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: {
      nodes: [
        {
          id: "Non Ferro Metaal (andere)",
        },
        {
          id: "Voedsel Organisch (gemengd)",
        },
        {
          id: "Aardolie (andere)",
        },
        {
          id: "Inorganisch (andere)",
        },
        {
          id: "Biotisch (andere)",
        },
        {
          id: "Organisch Chemisch",
        },
        {
          id: "Kwik",
        },
        {
          id: "Oplosmiddelen",
        },
        {
          id: "Onbekend (andere)",
        },
        {
          id: "Zand",
        },
        {
          id: "Gemengd",
        },
        {
          id: "Plantaardig Organisch",
        },
        {
          id: "Fossiel Organisch",
        },
        {
          id: "Cfk",
        },
        {
          id: "Gips",
        },
        {
          id: "Metaal (gemengd)",
        },
        {
          id: "Non Ferro Metaal",
        },
        {
          id: "Inorganisch (gemengd)",
        },
        {
          id: "Biotisch",
        },
        {
          id: "Aluminium",
        },
        {
          id: "Ferro Metaal",
        },
        {
          id: "Onbekend",
        },
        {
          id: "Mineraal",
        },
        {
          id: "Organisch (andere)",
        },
        {
          id: "Ferro Metaal (gemengd)",
        },
        {
          id: "Grind",
        },
        {
          id: "Stenen",
        },
        {
          id: "Mineraal (gemengd)",
        },
        {
          id: "Roostergoed",
        },
        {
          id: "Abiotisch (gemengd)",
        },
        {
          id: "Metaal",
        },
        {
          id: "Onbekend (gemengd)",
        },
        {
          id: "Abiotisch",
        },
        {
          id: "Organisch",
        },
        {
          id: "Spoorwegballast",
        },
        {
          id: "Totaal",
        },
        {
          id: "Inorganisch",
        },
        {
          id: "Edel Metaal",
        },
        {
          id: "Biotisch Polymeer",
        },
        {
          id: "Glas Material",
        },
        {
          id: "Isolatiemateriaal",
        },
        {
          id: "Aardolie",
        },
        {
          id: "Water",
        },
        {
          id: "Slib",
        },
        {
          id: "Metaal (andere)",
        },
        {
          id: "Voedsel Organisch",
        },
        {
          id: "Aardolie (gemengd)",
        },
        {
          id: "Natuurlijk Rubber",
        },
        {
          id: "Inorganisch Chemie",
        },
        {
          id: "Gevaarlijke stoffen",
        },
        {
          id: "Asbest",
        },
        {
          id: "Ferro Metaal (andere)",
        },
        {
          id: "Hout",
        },
        {
          id: "Biotisch Polymeer (gemengd)",
        },
        {
          id: "Fossiel Organisch (gemengd)",
        },
      ],
      links: [
        {
          source: "Aardolie",
          target: "Aardolie (andere)",
          value: 301.48,
          unit: "t",
        },
        {
          source: "Organisch",
          target: "Organisch Chemisch",
          value: 0.246,
          unit: "t",
        },
        {
          source: "Organisch Chemisch",
          target: "Cfk",
          value: 0.246,
          unit: "t",
        },
        {
          source: "Inorganisch",
          target: "Metaal",
          value: 46097.049,
          unit: "t",
        },
        {
          source: "Onbekend",
          target: "Roostergoed",
          value: 114.22,
          unit: "t",
        },
        {
          source: "Biotisch Polymeer",
          target: "Biotisch Polymeer (gemengd)",
          value: 123.998,
          unit: "t",
        },
        {
          source: "Inorganisch Chemie",
          target: "Oplosmiddelen",
          value: 673.041,
          unit: "t",
        },
        {
          source: "Biotisch",
          target: "Biotisch Polymeer",
          value: 9132.333,
          unit: "t",
        },
        {
          source: "Metaal",
          target: "Non Ferro Metaal",
          value: 9297.931,
          unit: "t",
        },
        {
          source: "Totaal",
          target: "Abiotisch",
          value: 180678.442,
          unit: "t",
        },
        {
          source: "Abiotisch",
          target: "Fossiel Organisch",
          value: 2813.445,
          unit: "t",
        },
        {
          source: "Inorganisch",
          target: "Inorganisch (andere)",
          value: 12716.555,
          unit: "t",
        },
        {
          source: "Onbekend",
          target: "Isolatiemateriaal",
          value: 29.34,
          unit: "t",
        },
        {
          source: "Onbekend",
          target: "Onbekend (gemengd)",
          value: 22.619,
          unit: "t",
        },
        {
          source: "Totaal",
          target: "Gemengd",
          value: 112236.988,
          unit: "t",
        },
        {
          source: "Voedsel Organisch",
          target: "Voedsel Organisch (gemengd)",
          value: 396.42,
          unit: "t",
        },
        {
          source: "Totaal",
          target: "Onbekend",
          value: 111773.321,
          unit: "t",
        },
        {
          source: "Onbekend",
          target: "Gevaarlijke stoffen",
          value: 0.011,
          unit: "t",
        },
        {
          source: "Onbekend",
          target: "Slib",
          value: 103720.14,
          unit: "t",
        },
        {
          source: "Organisch",
          target: "Biotisch",
          value: 64012.083,
          unit: "t",
        },
        {
          source: "Ferro Metaal",
          target: "Ferro Metaal (andere)",
          value: 9519.807,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Glas Material",
          value: 86.74,
          unit: "t",
        },
        {
          source: "Non Ferro Metaal",
          target: "Aluminium",
          value: 4730.795,
          unit: "t",
        },
        {
          source: "Inorganisch",
          target: "Inorganisch Chemie",
          value: 673.041,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Mineraal (gemengd)",
          value: 57696.743,
          unit: "t",
        },
        {
          source: "Inorganisch",
          target: "Water",
          value: 463.935,
          unit: "t",
        },
        {
          source: "Fossiel Organisch",
          target: "Aardolie",
          value: 460.515,
          unit: "t",
        },
        {
          source: "Inorganisch",
          target: "Inorganisch (gemengd)",
          value: 117.39,
          unit: "t",
        },
        {
          source: "Biotisch",
          target: "Voedsel Organisch",
          value: 396.42,
          unit: "t",
        },
        {
          source: "Ferro Metaal",
          target: "Ferro Metaal (gemengd)",
          value: 11709.918,
          unit: "t",
        },
        {
          source: "Abiotisch",
          target: "Abiotisch (gemengd)",
          value: 5716.647,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Asbest",
          value: 846.9,
          unit: "t",
        },
        {
          source: "Non Ferro Metaal",
          target: "Non Ferro Metaal (andere)",
          value: 4567.136,
          unit: "t",
        },
        {
          source: "Edel Metaal",
          target: "Kwik",
          value: 8.764,
          unit: "t",
        },
        {
          source: "Metaal",
          target: "Metaal (andere)",
          value: 12936.358,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Gips",
          value: 197.27,
          unit: "t",
        },
        {
          source: "Metaal",
          target: "Edel Metaal",
          value: 8.764,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Zand",
          value: 273.8,
          unit: "t",
        },
        {
          source: "Totaal",
          target: "Organisch",
          value: 64012.809,
          unit: "t",
        },
        {
          source: "Metaal",
          target: "Metaal (gemengd)",
          value: 2624.271,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Stenen",
          value: 52918.787,
          unit: "t",
        },
        {
          source: "Onbekend",
          target: "Onbekend (andere)",
          value: 7886.991,
          unit: "t",
        },
        {
          source: "Grind",
          target: "Spoorwegballast",
          value: 60.14,
          unit: "t",
        },
        {
          source: "Biotisch",
          target: "Biotisch (andere)",
          value: 53964.948,
          unit: "t",
        },
        {
          source: "Biotisch Polymeer",
          target: "Natuurlijk Rubber",
          value: 35.44,
          unit: "t",
        },
        {
          source: "Mineraal",
          target: "Grind",
          value: 60.14,
          unit: "t",
        },
        {
          source: "Organisch",
          target: "Organisch (andere)",
          value: 0.48,
          unit: "t",
        },
        {
          source: "Metaal",
          target: "Ferro Metaal",
          value: 21229.725,
          unit: "t",
        },
        {
          source: "Abiotisch",
          target: "Inorganisch",
          value: 172148.35,
          unit: "t",
        },
        {
          source: "Aardolie",
          target: "Aardolie (gemengd)",
          value: 159.035,
          unit: "t",
        },
        {
          source: "Inorganisch",
          target: "Mineraal",
          value: 112080.38,
          unit: "t",
        },
        {
          source: "Biotisch",
          target: "Plantaardig Organisch",
          value: 518.382,
          unit: "t",
        },
        {
          source: "Biotisch Polymeer",
          target: "Hout",
          value: 8972.895,
          unit: "t",
        },
        {
          source: "Fossiel Organisch",
          target: "Fossiel Organisch (gemengd)",
          value: 2352.93,
          unit: "t",
        },
      ],
    },
  },
};
