import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { Description } from "../../description"

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
    text: <Description text={["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]} />,
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