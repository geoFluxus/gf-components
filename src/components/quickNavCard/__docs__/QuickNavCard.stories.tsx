import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Cards/QuickNavCard",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    title: 'Main title of the section containing multiple items',
    subtitle: 'Subtitle of the section',
    items: [
      {
        name: 'Label of the first item on the list',
        href: 'https://en.geofluxus.com/',
      },
      {
        name: 'Label of the second item on the list',
        href: 'https://en.geofluxus.com/',
      },
      {
        name: 'Label of the third item on the list',
        href: 'https://en.geofluxus.com/',
      },
    ],
  },
};