import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Typography/Title",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    title: "Title",
    subtitle: "Suitable subtitle for section"
  },
};

export const NoSubtitle: Story = {
  args: {
    title: "Title",
  },
};

export const Secondary: Story = {
  args: {
    title: "Title",
    subtitle: "Suitable subtitle for section",
    type: 'secondary',
  },
};