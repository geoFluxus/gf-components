import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { TrendsData } from "../data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/Trends",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: TrendsData,
    xLeg: 'xLabel',
    yLeg: 'yLabel',
    tooltip: ({ dt }) => <span>Custom piechart tooltip</span>
  },
};
