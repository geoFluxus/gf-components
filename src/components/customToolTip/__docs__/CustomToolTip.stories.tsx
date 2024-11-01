import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/CustomToolTip",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    style: {
      background: "white",
      borderRadius: "2px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
      padding: "5px 9px",
    },
    label: 'Aardolie > Aardolie (andere)',
    amount: 301.48,
    unit: 't'
  },
};
