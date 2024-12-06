import React from "react";
import GlobalStyle from "../../globalStyles";
import { CustomToolTip } from "../customToolTip";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import Line from "./Line";
import Area from "./Area";
import { Flex } from "antd"
import styled from 'styled-components';


const StyledLabel = styled.span`
  font: var(--gf-label-sm-default);
  color: var(--gf-color-text-primary);
`

const colors = {
    domestic: 'hsl(42, 89%, 49%)',
    raw: 'hsl(331, 100%, 36%)',
    abiotic: 'hsl(0, 0%, 49%)',
    goal: 'hsl(182, 30%, 45%)'
}

const getMin = (array) => {
    return array.reduce((min, obj) => (obj < min ? obj : min), Infinity)
}

const getMax = (array) => {
    return array.reduce((max, obj) => (obj > max ? obj : max), -Infinity)
}


const DomRawChart: React.FC<Props> = ({
    data,
    style={},
    height=600,
    margin={},
    xScale={},
    yScale={},
    axisBottom={},
    axisLeft={},
    tooltip=null,
}) => {
  // scatterplot points
  const points = data.map(d => d?.points)

  // confidence areas
  const areas = data.map(d => d?.area)
  const legendData = areas.map(a => a?.id)
  const AreaLayer = (props) =>
    areas.map((area, idx) =>
        <Area key={`area-${idx}`} data={area?.data}
              color={colors?.[area?.id]} graph={props} />
    )

  // regression
  const lines = data.map(d => d?.line)
  const LineLayer = (props) =>
    lines.map((line, idx) =>
        <Line key={`line-${idx}`} data={line?.data}
              stroke={colors?.[line?.id]} graph={props} />
    )

  // goal line
  const goals = data.map(d => d?.goal)
  if (goals.length) legendData.push('goal')
  const GoalLayer = (props) =>
    goals.map((goal, idx) =>
        <Line key={`goal-${idx}`} data={goal}
              graph={props} stroke={colors?.goal} dashed />
    )

  // x-axis
  const x = areas.map(a => a.data.map(o => o.x)).flat()
  const minX = getMin(x)
  const maxX = getMax(x)

  // y-axis
  const y0 = areas.map(a => a.data.map(o => o.y0)).flat()
  const y1 = areas.map(a => a.data.map(o => o.y1)).flat()
  const maxY = Math.max(getMax(y0), getMax(y1))

  // legend
  const Legend = ({data}) => {
    const LegendLine = ({color}) =>
        <div style={{
            minWidth: 8,
            minHeight: 4,
            backgroundColor: color
        }} />

    const LegendCircle = ({color}) =>
        <div style={{
            minWidth: 8,
            minHeight: 8,
            borderRadius: 4,
            backgroundColor: color
        }} />

    const hsla = (hsl, opacity=0.3) => {
        return hsl.replace("hsl", "hsla").replace(")", `, ${opacity})`);
    }

    const standardTypes = ['abiotic', 'goal']
    const diagramType = data.filter(e => !standardTypes.includes(e))[0]

    const items = [
        {name: 'Totaal', color: colors?.[diagramType], shape: 'line'},
        {name: 'Abiotisch', color: colors?.abiotic, shape: 'line'},
        ...[{name: 'Doelstelling 2030', color: colors?.goal, shape: 'line'}],
        {name: 'Betrouwbaarheidsmarge', color: hsla(colors?.[diagramType]), shape: 'circle'},
        {name: 'Betrouwbaarheidsmarge', color: hsla(colors?.abiotic), shape: 'circle'}
    ]

    return (
        <Flex gap={16} className='gf-full' justify="center" wrap>
            {items.map((l, idx) =>
                <Flex gap={4} align="center" key={`legend-${idx}`}>
                    {l.shape === 'line' ?
                        <LegendLine color={l.color} /> :
                        <LegendCircle color={l.color} />
                    }
                    <StyledLabel>{l.name}</StyledLabel>
                </Flex>
            )}
        </Flex>
    )
  }

  return (
    <>
      <GlobalStyle />
      <Flex vertical gap={8} style={{width: "100%"}}>
          <div style={{ width: "100%", height: height, ...style }}>
            <ResponsiveScatterPlot
                data={points}
                colors={(d) => colors?.[d?.serieId]}
                margin={{ top: 20, right: 120, bottom: 60, left: 120, ...margin }}
                xScale={{ type: 'linear', min: minX, max: 2030, ...xScale }}
                yScale={{ type: 'linear', min: 0, max: maxY, ...yScale }}
                axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: 46,
                    truncateTickAt: 0,
                    legend: "axisBottom",
                    ...axisBottom,
                }}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: "middle",
                    legendOffset: -60,
                    truncateTickAt: 0,
                    legend: "axisLeft",
                    ...axisLeft,
                }}
                layers={[
                    "grid",
                    "markers",
                    "axes",
                    "legends",
                    AreaLayer,
                    LineLayer,
                    GoalLayer,
                    "nodes",
                ]}
                tooltip={({ node }) => {
                    return (
                      <CustomToolTip
                        body={tooltip?.({ node }) || <span>Tooltip</span>}
                      />
                    );
                }}
            />
          </div>
          <Legend data={legendData} />
      </Flex>
    </>
  );
};

export default DomRawChart;
