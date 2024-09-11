import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Cards/Metrics",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    percent: 35,
    cost: 18.6,
    description: 'description of the metrics',
    editable: false,
  },
};

export const Editable: Story = {
  args: {
    percent: 35,
    cost: 18.6,
    description: 'description of the metrics',
    editable: true,
  },
};