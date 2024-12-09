import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Components/Cards/GFMetricsGrid",
  component: Example,
  argTypes: {
    metricsData: {
      control: {
        type: "object",
      },
      defaultValue: [
        {
          percent: 35,
          cost: 18.6,
          description: "description 1",
          editable: false,
        },
        {
          percent: 50,
          cost: 25.0,
          description: "description 2",
          editable: true,
        },
        {
          percent: 75,
          cost: 30.2,
          description: "description 3",
          editable: false,
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    metricsData: [
      {
        percent: 35,
        cost: 18.6,
        description: "description of the metrics",
        editable: false,
      },
      {
        percent: 35,
        cost: 18.6,
        description: "description of the metrics",
        editable: false,
      },
      {
        percent: 35,
        cost: 18.6,
        description: "description of the metrics",
        editable: false,
      },
    ],
  },
};

export const FourCardsGrid: Story = {
  args: {
    metricsData: [
      {
        percent: '35.00%',
        cost: '18.60 md',
        description: "van de totale importwaarde waren machines en apparaten",
        editable: false,
      },
      {
        percent: '35.00%',
        cost: '18.60 md',
        description: "van de totale importwaarde waren machines en apparaten",
        editable: false,
      },
      {
        percent: '35.00%',
        cost: '18.60 md',
        description: "van de totale importwaarde waren machines en apparaten",
        editable: false,
      },
      {
        percent: '35.00%',
        cost: '18.60 md',
        description: "van de totale importwaarde waren machines en apparaten",
        editable: false,
      },
    ],
  },
};

export const TwoCardsGrid: Story = {
  args: {
    metricsData: [
      {
        percent: '35.00%',
        cost: '18.60 md',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio.",
        editable: false,
      },
      {
        percent: '35.00%',
        cost: '18.6 md',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio.",
        editable: false,
      },
    ],
  },
};
