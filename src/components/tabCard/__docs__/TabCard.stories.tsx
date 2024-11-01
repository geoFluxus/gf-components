import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "../../title";
import { Description } from "../../description";
import Example from "./Example";
import { Sankey } from "../../sankey";
import { SankeyData } from "../../sankey/data";
import { Table } from "antd";

const tabs = [
  {
    key: "chart",
    label: "Chart",
  },
  {
    key: "table",
    label: "Table",
  },
];

const COLUMNS = [
  {
    title: "Materiaal",
    dataIndex: "type",
    sorter: (a,b) => a["type"].localeCompare(b["type"])
  },
  {
    title: "Hoofdgroep",
    dataIndex: "flow",
    sorter: (a,b) => a["flow"].localeCompare(b["flow"])
  },
  {
    title: "Afval",
    dataIndex: "value",
    sorter: (a, b) => a["value"] - b["value"]
  },
  {
    title: "Eenheid",
    dataIndex: "unit",
  },
];

const dataSource = [
  {
    key: 1,
    type: "Totaal",
    flow: null,
    unit: "t",
    value: 468701.56,
  },
  {
    key: 2,
    type: "Gemengd",
    flow: "Totaal",
    unit: "t",
    value: 112236.988,
  },
  {
    key: 3,
    type: "Abiotisch",
    flow: "Totaal",
    unit: "t",
    value: 180678.442,
  },
  {
    key: 4,
    type: "Abiotisch (gemengd)",
    flow: "Abiotisch",
    unit: "t",
    value: 5716.647,
  },
  {
    key: 5,
    type: "Fossiel Organisch",
    flow: "Abiotisch",
    unit: "t",
    value: 2813.445,
  },
  {
    key: 6,
    type: "Aardolie",
    flow: "Fossiel Organisch",
    unit: "t",
    value: 460.515,
  },
  {
    key: 7,
    type: "Aardolie (gemengd)",
    flow: "Aardolie",
    unit: "t",
    value: 159.035,
  },
  {
    key: 8,
    type: "Aardolie (andere)",
    flow: "Aardolie",
    unit: "t",
    value: 301.48,
  },
  {
    key: 9,
    type: "Fossiel Organisch (gemengd)",
    flow: "Fossiel Organisch",
    unit: "t",
    value: 2352.93,
  },
  {
    key: 10,
    type: "Inorganisch",
    flow: "Abiotisch",
    unit: "t",
    value: 172148.35,
  },
];
const content = {
  chart: <Sankey sankeyData={SankeyData} />,
  table: (
    <Table columns={COLUMNS} dataSource={dataSource} scroll={{y: 500}} pagination={false}/>
  ),
};
const downloadHandlers = {
  chart: () => alert("Chart download in progress"),
  table: () => alert("Table download in progress"),
};
const ChartDescription = () => (
  <div style={{ padding: 24 }}>
    <Title title="Chart Description" type="secondary" />
    <Description
      columns={2}
      editable
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere."
    />
  </div>
);
const TableDescription = () => (
  <div style={{ padding: 24 }}>
    <Title title="Table Description" type="secondary" />
    <Description
      columns={2}
      editable
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere."
    />
  </div>
);
const expand1 = {
  chart: <ChartDescription />,
};
const expand2 = {
  chart: <ChartDescription />,
  table: <TableDescription />,
};

const meta: Meta<typeof Example> = {
  title: "Components/Cards/VisualisationTabCard",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    tabList: tabs,
    tabContent: content,
    expandContent: expand2,
    expandLabel: "Show additional content",
    handleDownload: downloadHandlers,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.",
  },
};

export const WithPartialAdditionalContent: Story = {
  args: {
    tabList: tabs,
    tabContent: content,
    expandContent: expand1,
    expandLabel: "Show additional content",
    handleDownload: downloadHandlers,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.",
  },
};

export const NoAdditionalContent: Story = {
  args: {
    tabList: tabs,
    tabContent: content,
    handleDownload: downloadHandlers,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.",
  },
};
