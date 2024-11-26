import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { data } from './data'


const meta: Meta<typeof Example> = {
  title: "Components/Visualisation/WasteOverview",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;


export const Default: Story = {
  args: {
    bar: {
        data: data,
        keys: [
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ],
        indexBy: "country"
    }
  },
};
