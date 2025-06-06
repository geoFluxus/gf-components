import { useRef, useState, useEffect } from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";
import Line from "./Line";

const colors = {
  goal: "hsl(182, 30%, 45%)",
  national: "hsl(35, 100%, 96%)",
  area: "hsl(205, 40%, 79%)",
};

const styledText = {
  font: "var(--gf-label-md-default)",
  color: "var(--gf-color-text-secondary)",
  fontSize: "12px",
  lineHeight: "14px"
}


const GoalChart = ({
  data,
  height = 500,
  padding = 0.2,
  keys = ["total"],
  indexBy = "year",
  margin = {},
  axisBottom = {},
  axisLeft = {},
  valueFormat=null,
  legendLabelWidth = 145,
  legendShapeWidth = 16,
  legendGap = 8,
  legendPadding = 8,
  tooltip = null,
}) => {
  const barData = data?.bar,
    goalData = data?.goal,
    area = data?.area;
  const barColor = colors[goalData ? "national" : "area"];
  const maxY = Math.max(
    ...barData.map(b => keys.filter(key => key in b).reduce((acc, key) => acc + b[key], 0)),
    goalData?.value || 0
  )

    const GoalLayer = (props) =>
        goalData &&
        <Line data={goalData} graph={props} stroke={colors?.goal} />

    const LegendGoal = () =>
        <div style={{
            display: 'flex',
            gap: legendGap,
            alignItems: 'center',
            marginBottom: legendGap
        }}>
            <div style={{
                backgroundColor: colors?.goal,
                minWidth: legendShapeWidth,
                minHeight: 4
            }}/>
            <span style={{...styledText, width: legendLabelWidth}}>
                {`Nationaal doel: ${goalData.value} ${goalData.unit}`}
            </span>
        </div>

    const LegendArea = () =>
        <div style={{
            display: 'flex',
            gap: legendGap,
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: barColor,
                minWidth: legendShapeWidth,
                minHeight: legendShapeWidth
            }}/>
            <span style={{...styledText, width: legendLabelWidth}}>
                {`Primair geproduceerd afval in ${area}`}
            </span>
        </div>

  const Legend = (props) => {
    const ref = useRef(null);
    const [size, setSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      if (!ref?.current) return;
      setSize({
        width: ref?.current?.clientWidth,
        height: ref?.current?.clientHeight,
      });
    }, []);

    return (
      <g>
        <foreignObject
          x={props.innerWidth + legendPadding}
          y={props.innerHeight - size.height}
          width={size.width}
          height={size.height}
        >
          <div ref={ref} style={{ display: "inline-block" }}>
            {goalData && <LegendGoal />}
            <LegendArea />
          </div>
        </foreignObject>
      </g>
    );
  };

    const legendWidth = legendPadding + legendShapeWidth + legendGap + legendLabelWidth
    return (
        <>
            <GlobalStyle />
            <div style={{ width: "100%", height: height }}>
                <ResponsiveBar
                    data={barData}
                    keys={keys}
                    indexBy={indexBy}
                    colors={barColor}
                    margin={{left: 50, bottom: 50, top: 10, right: legendWidth, ...margin}}
                    padding={padding}
                    valueFormat={d => valueFormat?.(d) || d}
                    minValue={0}
                    maxValue={maxY}
                    axisBottom={{
                        tickSize: 5,
                        legendPosition: 'middle',
                        legendOffset: 40,
                        ...axisBottom
                    }}
                    axisLeft={{
                        tickSize: 5,
                        legendPosition: 'middle',
                        legendOffset: -40,
                        ...axisLeft
                    }}
                    layers={['grid', 'axes', 'bars', GoalLayer, Legend]}
                    tooltip={(bar) => {
                        return (
                          <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                        );
                    }}
                />
            </div>
        </>
    )
}

export default GoalChart;
