import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { TreeMapData } from "../data"

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/TreeMap",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: TreeMapData,
  },
};
