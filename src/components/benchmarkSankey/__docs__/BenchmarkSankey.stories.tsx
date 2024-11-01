import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from "../data"

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/BenchmarkSankey",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: data,
  },
};
