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
        unit: '%',
        targets: [
            {value: 50, name: 'Doel 2030', color: "#FFAB2E"},
            {value: 55, name: 'Doel 2035', color: "#1094D7"},
        ]
    },
    besparen: {
        colors: {
            "raw": "#92DAE1",
        },
        legend: {
            "raw": "Grondstoffengebruik",
        },
        text: 'Doel 2035: Verlagen met 15% ten op zichte van 2016',
        targets: [
            {name: 'Doel 2030', color: "#FFAB2E"},
            {name: 'Doel 2035', color: "#1094D7"},
        ]
    },
    behouden_hoeveelheid: {
        colors: {
            "high": "#226123",
            "other": '#84B08D',
            "low": '#D0D5DD'
        },
        legend: {
            "high": "Hoogwaardige recycling",
            "other": 'Overige recycling',
            "low": 'Verbranden/Storten'
        },
        text: 'Doel 2035: Verlagen van totale hoeveelheid afval ten op zichte van 2016',
        unit: 'kt'
    },
    behouden_verwerking: {
        colors: {
            "high": "#226123",
            "other": '#84B08D',
            "low": '#D0D5DD'
        },
        legend: {
            "high": "Hoogwaardige recycling",
            "other": 'Overige recycling',
            "low": 'Verbranden/Storten'
        },
        text: 'Doel 2035: Verhogen van percentage gerecycled afval naar minimaal 82% waarvan minimaal 15% hoogwaardige recycling',
        unit: '%',
        targets: [
            {name: 'Doel Hoogwaardig 2035', color: "#226123", value: 15},
            {name: 'Doel Recycling 2035', color: "#84B08D", value: 82},
        ]
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
        {targets?.map((target, idx) => {
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
                            borderTop: `1px dashed ${target?.color}`
                        }}
                    />
                    <StyledText
                        $size={12}
                        $height={14}
                    >
                        {`${target?.name}`}
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
    const targets = goalObj?.targets?.map((target, idx) => ({...target, ...data?.targets?.[idx]}))
    const unit = data?.unit || goalObj?.unit
    const axisLeftLegend = unit === '%' ?
        'Percentage (%)' :
        `Gewicht (${unit})`

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
                {targets?.map((target, idx) => {
                    return (
                        <Line
                            data={target?.value}
                            graph={props}
                            stroke={target?.color}
                            dashed
                        />
                    )
                })}
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
                        margin={{left: 50, bottom: 35, top: 10, right: 0}}
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
