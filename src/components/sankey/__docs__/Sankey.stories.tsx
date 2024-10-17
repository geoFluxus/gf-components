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
          id: "John",
          nodeColor: "hsl(64, 70%, 50%)",
        },
        {
          id: "Raoul",
          nodeColor: "hsl(114, 70%, 50%)",
        },
        {
          id: "Jane",
          nodeColor: "hsl(337, 70%, 50%)",
        },
        {
          id: "Marcel",
          nodeColor: "hsl(89, 70%, 50%)",
        },
        {
          id: "Ibrahim",
          nodeColor: "hsl(129, 70%, 50%)",
        },
        {
          id: "Junko",
          nodeColor: "hsl(114, 70%, 50%)",
        },
      ],
      links: [
        {
          source: "Marcel",
          target: "John",
          value: 126,
        },
        {
          source: "Marcel",
          target: "Raoul",
          value: 72,
        },
        {
          source: "Marcel",
          target: "Jane",
          value: 141,
        },
        {
          source: "Marcel",
          target: "Ibrahim",
          value: 117,
        },
        {
          source: "Jane",
          target: "Ibrahim",
          value: 181,
        },
        {
          source: "Jane",
          target: "Junko",
          value: 104,
        },
        {
          source: "Jane",
          target: "John",
          value: 116,
        },
        {
          source: "Ibrahim",
          target: "Raoul",
          value: 132,
        },
        {
          source: "Raoul",
          target: "John",
          value: 21,
        },
        {
          source: "Raoul",
          target: "Junko",
          value: 173,
        },
      ],
    },
  },
};
