import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from "./data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/BarChart",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: data,
    keys: [
        "Consumptie huishoudens",
        "Dienstverlening bedrijven",
        "Investeringen vaste activa",
        "Overheid",
        "Productie goederen",
        "Verandering voorraden"
    ],
    indexBy: "flow",
    height: 150,
    padding: 0.2,
    axisBottom: {
        tickSize: 5,
        legendPosition: 'middle',
        legendOffset: 40,
        legend: 'Gewicht (t)'
    }
  },
};
