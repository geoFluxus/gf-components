import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { ScatterPlotData } from "../data";
import LineTarget from "../LineTarget";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/ScatterPlot",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: ScatterPlotData,
  },
};
