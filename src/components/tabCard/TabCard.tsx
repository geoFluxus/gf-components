import React, { MouseEventHandler, useState } from 'react';
import { Flex } from 'antd';
import GlobalStyle from '../../globalStyles';
import GFCard, { GFCardProps } from '../card/GFCard';
import { DownloadButton, ExpandButton } from '../button';

interface TabT {
  key: string;
  label: string;
}
interface ContentT {
  [key: string]: React.ReactElement | React.ReactNode;
}

export interface TabCardProps extends GFCardProps {
  tabList: TabT[];
  tabContent: ContentT;
  expandContent?: ContentT;
  expandLabel?: string;
  padding?: number;
  handleDownload?: MouseEventHandler<HTMLButtonElement>;
}

const TabCard: React.FC<TabCardProps> = ({
  tabList,
  tabContent,
  expandContent,
  expandLabel,
  padding=24,
  handleDownload,
  ...props
}) => {
  const [ activeTab, setActiveTab ] = useState<string>(tabList?.[0]?.key)
  const [ expand, setExpand ] = useState<boolean>(false)

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }
  const handleExpad = () => {
    setExpand(prev => !prev)
  }

  return (
    <>
      <GlobalStyle />
      <GFCard 
        className='gf-full-width gf-override-ant-card-actions'
        tabList={tabList}
        cardtype={'default'} 
        activeTabKey={activeTab}
        onTabChange={handleTabChange}
        tabBarExtraContent={<DownloadButton onClick={handleDownload}/>}
        actions={expandContent?.[activeTab] ? [
          <Flex vertical>
            <ExpandButton open={expand} onClick={handleExpad}>{expandLabel}</ExpandButton>
            { expand && expandContent?.[activeTab]}
          </Flex>

        ] : undefined}
        styles={{
          header: {padding: `0px ${padding}`},
          body: {padding: padding},
        }}
        {...props} 
      >
        {tabContent?.[activeTab]}
      </GFCard>
    </>
  )
}

export default TabCard