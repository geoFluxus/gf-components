import GlobalStyle from "../../globalStyles";
import { ResponsiveBar } from '@nivo/bar'
import styled from 'styled-components';
import { CustomToolTip } from "../customToolTip";
import Line from "./Line";


const colors = {
    goal: 'hsl(182, 30%, 45%)',
    national: 'hsl(35, 100%, 96%)',
    area: 'hsl(205, 40%, 79%)'
}

const StyledText = styled.text`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: 12px;
  dominant-baseline: hanging;
`

const measureText = (text, fontSize=12) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontSize}px Roboto, sans-serif`;

    return context.measureText(text)
}


const GoalChart = ({
    data,
    height=500,
    padding=0.2,
    keys=["total"],
    indexBy="year",
    margin={},
    axisBottom={},
    axisLeft={},
    legendLabelWidth=145,
    legendShapeWidth=16,
    legendGap=8,
    legendPadding=8,
    tooltip=null
}) => {
    const barData = data?.bar,
          goalData = null
    const barColor = colors[goalData ? 'national' : 'area']

    const GoalLayer = (props) =>
        goalData &&
        <Line data={goalData} graph={props} stroke={colors?.goal} />

    const LegendRect = (props) =>
        <rect
            width={props.width}
            height={props.width}
            fill={barColor}
            x={props.x}
            y={props.y}
        />

    const Legend = (props) => {
        const metrics = measureText('Legend'),
              textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
        return (
            <g>
                <LegendRect
                    x={props.innerWidth + legendPadding}
                    y={props.innerHeight - legendShapeWidth}
                    width={legendShapeWidth}
                />
                <StyledText
                    x={props.innerWidth + legendPadding + legendShapeWidth + legendGap}
                    y={props.innerHeight - legendShapeWidth / 2 - textHeight / 2}
                >
                    Legend
                </StyledText>
            </g>
        )
    }

    return (
        <>
            <GlobalStyle />
            <div style={{ width: "100%", height: height }}>
                <ResponsiveBar
                    data={barData}
                    keys={keys}
                    indexBy={indexBy}
                    colors={barColor}
                    margin={{left: 50, bottom: 50, right: 100, ...margin}}
                    padding={padding}
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

export default GoalChart