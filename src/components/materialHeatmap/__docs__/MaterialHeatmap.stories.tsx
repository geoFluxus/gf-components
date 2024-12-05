import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from "./data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/MaterialHeatmap",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};