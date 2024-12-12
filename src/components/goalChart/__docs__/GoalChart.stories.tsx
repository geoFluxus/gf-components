import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";
import { data } from "./data"

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/GoalChart",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: data,
    axisLeft: {
        legend: 'Gewicht (Mt)'
    },
    axisBottom: {
        legend: 'Jaar'
    }
  },
};
