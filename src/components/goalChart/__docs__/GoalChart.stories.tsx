import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";
import {
    vervangen,
    besparen,
    behouden_hoeveelheid,
    behouden_verwerking
} from "./data"

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

export const BehoudenHoeveelheid: Story = {
  args: {
    data: behouden_hoeveelheid,
    goal: 'behouden_hoeveelheid',
  },
};

export const BehoudenVerwerking: Story = {
  args: {
    data: behouden_verwerking,
    goal: 'behouden_verwerking',
  },
};
