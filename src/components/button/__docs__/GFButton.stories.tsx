import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Buttons/GFButton",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    label: "Button",
    type: 'primary',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};
export const Default: Story = {
  args: {
    label: "Button",
    type: 'default',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};
export const Link: Story = {
  args: {
    label: "Button",
    type: 'link',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};
export const Text: Story = {
  args: {
    label: "Button",
    type: 'text',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};