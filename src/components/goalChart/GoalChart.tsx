import { useRef, useState, useEffect } from "react";
import GlobalStyle from "../../globalStyles";
import { Flex } from "antd"
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";
import Line from "./Line";


const StyledText = styled.tspan`
    color: var(--Text-colorText, #1D2939);
    font-family: 'Roboto', sans-serif;
    font-size: ${({ $size = 14 }) => `${$size}px`};
    font-style: normal;
    font-weight: 400;
    line-height: ${({ $lineHeight = 22 }) => `${$lineHeight}px`};
`


const goals = {
    vervangen: {
        colors: {
            "renew": "#86AA49",
            "other": "#D0D5DD"
        },
        legend: {
            "renew": "Hernieuwbare en secundaire grondstoffen",
            "other": "Overige grondstoffen"
        },
        text: 'Doel 2035: Verhogen naar 55%',
        increase: true,
        targets: {
            g30: 50,
            g35: 55,
            unit: '%'
        }
    },
    besparen: {
        colors: {
            "raw": "#92DAE1",
        },
        legend: {
            "raw": "Grondstoffen gebruik",
        },
        axisLeft: 'Gewicht',
        text: 'Doel 2035: Verlagen met 15% ten op zichte van 2016',
    }
}


const GoalText = ({increase, text}) =>
    <Flex
        gap={8}
        align="center"
        style={{
            padding: "4px 8px",
            borderRadius: 4,
            border: "1px solid #A6C6FB",
            background: "#F0F6FF",
            color: "#152BEE"
        }}
    >
        {increase ? <ArrowUpOutlined /> : <ArrowDownOutlined /> }
        <StyledText>{text}</StyledText>
    </Flex>


const Legend = ({legend, targets, colors}) =>
    <Flex
        gap={16}
        justify="center"
        align="center"
    >
        {Object.entries(legend)?.map(([key, name], idx) => {
            return (
                <Flex
                    key={idx}
                    align="center"
                    gap={8}
                >
                    <div
                        style={{
                            width: 16,
                            height: 16,
                            background: colors[key]
                        }}
                    />
                    <StyledText
                        $size={12}
                        $height={14}
                    >
                        {name}
                    </StyledText>
                </Flex>
            )
        })}
        {Object.entries(targets).map(([key, name], idx) => {
            return (
                <Flex
                    key={idx}
                    align="center"
                    gap={8}
                >
                    <div
                        style={{
                            width: 16,
                            height: 1,
                            borderTop: `1px dashed ${key === 'g30' ? "#FFAB2E" : "#1094D7"}`
                        }}
                    />
                    <StyledText
                        $size={12}
                        $height={14}
                    >
                        {`Doel ${key === 'g30' ? '2030' : '2035'}`}
                    </StyledText>
                </Flex>
            )
        })}
    </Flex>


const GoalChart = ({
    data,
    goal,
    height = 500,
    padding = 0.2,
    indexBy = "year",
    valueFormat=null,
    margin = {},
    axisBottom = {},
    axisLeft = {},
    tooltip = null
}) => {
    const goalObj = goals?.[goal]
    const targets = data?.targets || goalObj?.targets
    const axisLeftLegend = targets?.unit === '%' ?
        'Percentage (%)' :
        `Gewicht (${targets?.unit})`

    const barData = data?.data,
          colors = goalObj?.colors,
          keys = Object.keys(colors),
          text = goalObj?.text,
          increase = goalObj?.increase,
          legend = goalObj.legend

    const maxY = Math.max(
        ...barData.map(b => keys.filter(key => key in b).reduce((acc, key) => acc + b[key], 0))
    )

    const GoalLayer = (props) => {
        return (
            <>
                <Line
                    data={targets?.g30}
                    graph={props}
                    stroke="#FFAB2E"
                    dashed
                />
                <Line
                    data={targets?.g35}
                    graph={props}
                    stroke="#1094D7"
                    dashed
                />
            </>
        )
    }

    return (
        <>
            <GlobalStyle />

            <Flex
                vertical
                gap={16}
                style={{width: "100%"}}
            >
                {/* goal */}
                <GoalText
                    increase={increase}
                    text={text}
                />

                {/* graph */}
                <div style={{ width: "100%", height: height }}>
                    <ResponsiveBar
                        data={barData}
                        keys={keys}
                        indexBy={indexBy}
                        colors={(d) => colors?.[d?.id]}
                        enableLabel={false}
                        margin={{left: 50, bottom: 50, top: 10, right: 0}}
                        padding={padding}
                        valueFormat={d => valueFormat?.(d) || d}
                        minValue={0}
                        maxValue={maxY}
                        axisBottom={{
                            tickSize: 0,
                            legendPosition: 'middle',
                            legendOffset: 30,
                            legend: 'Jaar',
                            ...axisBottom
                        }}
                        axisLeft={{
                            tickSize: 0,
                            tickValues: 5,
                            legendPosition: 'middle',
                            legendOffset: -40,
                            legend: axisLeftLegend,
                            ...axisLeft
                        }}
                        gridYValues={5}
                        layers={['grid', 'axes', 'bars', GoalLayer]}
                        tooltip={(bar) => {
                            return (
                              <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                            );
                        }}
                        theme={{
                            text: {
                              fontFamily: 'Roboto, sans-serif',
                              fill: '#667085',
                            },
                        }}
                    />
                </div>

                {/* legend */}
                <Legend
                    legend={legend}
                    colors={colors}
                    targets={targets}
                />
            </Flex>
        </>
    )
}

export default GoalChart;
