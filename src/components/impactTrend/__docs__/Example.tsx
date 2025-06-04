import React from "react";
import ImpactTrend from "../ImpactTrend";
import TabCard from "../../tabCard/TabCard";


const Example = (props) => {
  const tabs = [
      {
        key: "chart",
        label: "Grafiek",
      }
  ]

  const Chart = <ImpactTrend {...props} />

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
