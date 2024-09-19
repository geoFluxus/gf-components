import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoCircleOutlined } from '@ant-design/icons'
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Cards/NavCard",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    icon:<InfoCircleOutlined />,
    title: "Navigation Card",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex fa.',
    disabled: false,
    onClick: () => alert("You clicked me!"),
  },
};