import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from "./data"
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/CrmValueChart",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    data: data,
    keys: [
        "crm",
        "value",
    ],
    indexBy: "material",
    height: 400,
    padding: 0.3,
    axisBottom: {legend: 'Gewicht (t)'},
    zeroMarker: true,
    defs: [
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'white',
            rotation: -45,
            lineWidth: 2,
            spacing: 5
        }
    ],
    fill: [
        {
            match: {
                id: 'Verandering voorraden'
            },
            id: 'lines'
        }
    ]
  },
};