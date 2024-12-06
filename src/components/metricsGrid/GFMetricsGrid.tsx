import Metrics, { MetricsProps } from "../metrics/Metrics";
import { Flex } from "antd";

export interface GFMetricsGridProps extends MetricsProps {
  metricsData: MetricsProps[];
}

const GFMetricsGrid: React.FC<GFMetricsGridProps> = ({
    metricsData,
    className=null,
    gap=null,
    justify=null,
    wrap=false,
    style={},
    full=false
}) => {
  return (
    <Flex
        className={className}
        gap={gap || 10}
        justify={justify}
        wrap={wrap}
        style={style}
    >
      {metricsData?.map((metric, idx) => (
        <Metrics
          key={`metrics-${idx}`}
          percent={metric.percent}
          description={metric.description}
          cost={metric.cost}
          editable={metric.editable}
          style={{width: full ? "100%" : `${100 / metricsData.length}%`}}
        />
      ))}
    </Flex>
  );
};

export default GFMetricsGrid;
