import Metrics, { MetricsProps } from "../metrics/Metrics";
import { Flex } from "antd";

export interface GFMetricsGridProps extends MetricsProps {
  metricsData: MetricsProps[];
}

const GFMetricsGrid: React.FC<GFMetricsGridProps> = ({ metricsData }) => {
  return (
    <Flex gap={10} wrap>
      {metricsData?.map((metric) => (
        <Metrics
          percent={metric.percent}
          description={metric.description}
          cost={metric.cost}
          editable={metric.editable}
        />
      ))}
    </Flex>
  );
};

export default GFMetricsGrid;
