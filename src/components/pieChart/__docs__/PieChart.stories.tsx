import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { PieChartData, EmptyPieChartData } from "../data";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/PieChart",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: PieChartData,
    title: "Afval Enschede",
    isEmpty: false
  },
};

export const NoDataAvailable: Story = {
  args: {
    data: EmptyPieChartData,
    title: "Afval Enschede",
    isEmpty: true
  },
};
