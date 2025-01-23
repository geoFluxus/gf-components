import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { TreeMapData } from "../data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/TreeMap",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    treeMapData: TreeMapData,
    colors: { datum: 'data.color' },
    nodeOpacity: 1,
    style: {height: 500},
    identity: "code",
    value: "value",
    labelTitle: "code",
    labelText: "name",
    labelTextColor: "white",
    borderColor: "white",
    tooltip: ({ node }) => <span>Custom treemap tooltip</span>
  },
};
