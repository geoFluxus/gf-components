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
        "Biomassa en voedsel": "hsla(205, 40%, 79%, 1)",
        Kunststoffen: "hsla(83, 47%, 73%, 1)",
        Bouwmaterialen: "hsla(4, 55%, 75%, 1)",
        Consumptiegoederen: "hsla(35, 74%, 73%, 1)",
        Overig: "hsla(269, 24%, 77%, 1)",
        Maakindustrie: "hsla(26, 74%, 58%, 1)",
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
