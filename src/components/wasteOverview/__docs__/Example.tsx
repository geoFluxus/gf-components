import React, { FC } from "react";
import WasteOverview from "../WasteOverview";
import TabCard from "../../tabCard/TabCard";


const Example = ({bar, sankey}) => {
  const tabs = [
      {
        key: "chart",
        label: "Grafiek",
      }
  ]

  const Chart =
    <WasteOverview
        bar={bar}
        sankey={sankey}
    />

  const content = {
      chart: Chart,
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
