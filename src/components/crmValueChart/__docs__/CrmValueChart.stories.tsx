import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from "./data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/CrmValueChart",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: data,
    keys: [
        "crm",
        "value",
    ],
    indexBy: "material",
    axisBottom: {legend: 'Percentage (%)'},
  },
};