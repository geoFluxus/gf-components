import React, { FC } from "react";
import GFCard from '../../card/GFCard'
import GFMetricsGrid from '../GFMetricsGrid'
import { Flex } from "antd"


const Example= ({metricsData}) => {
  return (
    <GFCard>
        <Flex className='full' vertical gap={24}>
            <GFMetricsGrid metricsData={metricsData}/>
        </Flex>
    </GFCard>
  );
};

export default Example;