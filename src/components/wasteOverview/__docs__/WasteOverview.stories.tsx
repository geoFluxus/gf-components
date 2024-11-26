import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { barchartData } from './data'


const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/WasteOverview",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;


export const Default: Story = {
  args: {
    bar: {
        data: barchartData,
        keys: [
            'agenda_1',
            'agenda_2',
            'agenda_3',
            'agenda_4',
            'agenda_5',
            'agenda_6'
        ],
        indexBy: "country"
    }
  },
};
