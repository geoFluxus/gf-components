import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from "../data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/ImpactTrend",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: data,
    indexBy: "year",
    keys: [
        "Biomassa en voedsel",
        "Kunststoffen",
        "Bouwmaterialen",
        "Consumptiegoederen",
        "Overig",
        "Maakindustrie",
    ],
    color: {

    },
    valueFormat: (d) => Math.round(d),
    axisLeft: {
        legend: 'Gewicht (Mt)'
    },
    axisBottom: {
        legend: 'Jaar'
    }
  },
};
