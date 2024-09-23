import React, { FC } from "react";
import TabCard, {TabCardProps} from "../TabCard";
import { Description } from '../../description'
import { Title } from '../../title'

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
  'chart': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dignissim odio, ultrices volutpat ex faucibus ac. Nam volutpat vulputate dolor eu imperdiet. Cras ac tellus eu ligula cursus venenatis et quis diam. Vestibulum dictum pulvinar ex, in semper felis fermentum nec. In auctor eu libero eu mattis. Sed faucibus, ipsum a sollicitudin scelerisque, augue purus tristique enim, at condimentum nibh augue at erat. Nunc suscipit dignissim nisl non elementum. Nunc non lorem sit amet mauris cursus porttitor et non augue. Nam iaculis viverra lectus id posuere.',
  'table': 'An awesome table',
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
const expand = {
  'chart': <ChartDescription />,
  'table': <TableDescription />,
}

const Example: FC<TabCardProps> = ({
  tabList=tabs,
  tabContent=content,
  expandContent=expand,
  expandLabel='Show additional content',
  handleDownload=()=>alert('Download in progress'),
  children,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TabCard 
        tabList={tabList} 
        tabContent={tabContent}
        expandContent={expandContent}
        expandLabel={expandLabel}
        handleDownload={handleDownload}
        children={children}
        {...props}
      />
    </div>
  );
};

export default Example;