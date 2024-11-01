import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/VisSelectors",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: { isOneSelector: true },
};

export const oneVisSelector: Story = {
  args: { isOneSelector: true },
};

export const twoVisSelectors: Story = {
  args: { isOneSelector: false },
};
