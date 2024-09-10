import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Buttons/Download",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Download: Story = {
  args: {
    label: "Download",
    disabled: false,
    onClick: () => alert("File downloaded!"),
  },
};