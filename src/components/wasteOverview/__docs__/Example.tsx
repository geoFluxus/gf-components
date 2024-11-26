import React, { FC } from "react";
import WasteOverview from "../WasteOverview";
import TabCard from "../../tabCard/TabCard";


const Example = ({}) => {
  const tabs = [
      {
        key: "chart",
        label: "Grafiek",
      },
      {
        key: "table",
        label: "Tabel",
      },
  ]

  const content = {
      chart: <WasteOverview />,
      table: <WasteOverview />
  };

  return (
    <div style={{padding: '100px 200px'}}>
        <TabCard
            tabContent={content}
            tabList={tabs}
        />
    </div>
  );
};

export default Example;
