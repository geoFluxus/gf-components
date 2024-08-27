import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    type: 'primary',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};
export const Default: Story = {
  args: {
    text: "Button",
    type: 'default',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};
export const Link: Story = {
  args: {
    text: "Button",
    type: 'link',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};