import React, { FC } from "react";
import TabCard, {TabCardProps} from "../TabCard";

const Example: FC<TabCardProps> = ({
  tabList,
  tabContent,
  expandContent,
  expandLabel,
  handleDownload,
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
        {...props}
      />
    </div>
  );
};

export default Example;