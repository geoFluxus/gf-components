import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Controls/ButtonControls",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    content: [{key: 0, label: 'Since 2018'}, {key: 1, label: 'compared to Q4 2022'}],
    handler: (e) => alert(`Value selected: ${e.target.value}`),
    disabled: false,
  },
};

export const DisaledSingleButton: Story = {
  args: {
    content: [{key: 0, label: 'Since 2018'}, {key: 1, label: 'compared to Q4 2022', disabled: true}, {key: 2, label: 'Relative (%)'}],
    handler: (e) => alert(`Value selected: ${e.target.value}`),
    disabled: false,
  },
};

export const Disaled: Story = {
  args: {
    content: [{key: 0, label: 'Since 2018'}, {key: 1, label: 'compared to Q4 2022'}, {key: 2, label: 'Relative (%)'}],
    handler: (e) => alert(`Value selected: ${e.target.value}`),
    disabled: true,
  },
};