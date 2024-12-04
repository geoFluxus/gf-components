import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data, co2eq_data } from "./data"
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
    axisBottom: {legend: 'Gewicht (t)'}
  },
};


export const OnderstaandeStromen: Story = {
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


export const CO2eqUitstoot: Story = {
  args: {
    data: co2eq_data,
    keys: [
        "Biomassa en voedsel",
        "Kunststoffen",
        "Bouwmaterialen",
        "Consumptiegoederen",
        "Overig",
        "Maakindustrie",
    ],
    indexBy: "indicator",
    height: 130,
    padding: 0.2,
    layers: [],
    margin: {bottom: 0},
    enableLabel: true,
    label: (d) => `${d?.formattedValue}%`
  },
};