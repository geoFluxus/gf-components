import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "GFCard",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    cardType: 'default',
    title: "Default Card",
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};

export const DefaultNoTitle: Story = {
  args: {
    cardType: 'default',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};

export const Grey: Story = {
  args: {
    cardType: 'grey',
    title: "Grey Card",
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};

export const GreyNoTitle: Story = {
  args: {
    cardType: 'grey',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};