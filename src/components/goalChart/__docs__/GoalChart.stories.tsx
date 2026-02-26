import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";
import { vervangen, besparen } from "./data"

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/GoalChart",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: vervangen,
    goal: 'vervangen',
  },
};


export const Besparen: Story = {
  args: {
    data: besparen,
    goal: 'besparen',
  },
};
