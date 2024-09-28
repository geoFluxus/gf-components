import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "../../title";
import { Description } from "../../description";
import Example from "./Example";

const tabs = [
  {
    key: 'chart',
    label: 'Chart',
  },
  {
    key: 'table',
    label: 'Table',
  },
];
const content = {
  'chart': <Description
              editable 
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.' 
            />,
  'table': <Description
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.' 
            />,
}
const downloadHandlers = {
  'chart': ()=>alert('Chart download in progress'),
  'table': ()=>alert('Table download in progress'),
}
const ChartDescription = () => <div style={{ padding: 24 }}>
  <Title title="Chart Description" type="secondary"/>
  <Description 
    columns={2} 
    editable 
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.' 
  />
</div>
const TableDescription = () => <div style={{ padding: 24 }}>
  <Title title="Table Description" type="secondary"/>
  <Description 
    columns={2} 
    editable 
    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.' 
  />
</div>
const expand1 = {
  'chart': <ChartDescription />,
}
const expand2 = {
  'chart': <ChartDescription />,
  'table': <TableDescription />,
}

const meta: Meta<typeof Example> = {
  title: "Components/Cards/TabCard",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    tabList: tabs,
    tabContent:content,
    expandContent: expand2,
    expandLabel: 'Show additional content',
    handleDownload: downloadHandlers,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};

export const WithPartialAdditionalContent: Story = {
  args: {
    tabList: tabs,
    tabContent:content,
    expandContent: expand1,
    expandLabel: 'Show additional content',
    handleDownload: downloadHandlers,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};

export const NoAdditionalContent: Story = {
  args: {
    tabList: tabs,
    tabContent:content,
    handleDownload: downloadHandlers,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  },
};