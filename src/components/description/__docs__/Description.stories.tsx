import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Components/Typography/Description",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const TwoColumns: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
    columns: 2
  },
};

export const TwoColumnsEditable: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
    columns: 2,
    editable: true,
  },
};

export const ThreeColumns: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
    columns: 3
  },
};

export const FourColumns: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
    columns: 4
  },
};