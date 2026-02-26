import { useRef, useState, useEffect } from "react";
import GlobalStyle from "../../globalStyles";
import { Flex } from "antd"
import { ArrowUpOutlined, ArrowUpDown } from "@ant-design/icons";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
import { CustomToolTip } from "../customToolTip";
import Line from "./Line";


const StyledText = styled.tspan`
    color: var(--Text-colorText, #1D2939);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
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
        axisLeft: 'Percentage (%)',
        text: 'Doel 2035: Verlagen met 15% ten op zichte van 2016',
        increase: true
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


const Legend = () =>
    <h1>Hello</h1>


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
    const goalObj = goals?.[goal],
          colors = goalObj?.colors,
          keys = Object.keys(colors),
          axisLeftLegend = goalObj?.axisLeft,
          text = goalObj?.text,
          increase = goalObj?.increase

    const maxY = Math.max(
        ...data.map(b => keys.filter(key => key in b).reduce((acc, key) => acc + b[key], 0))
    )

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
                        data={data}
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
                            tickSize: 5,
                            legendPosition: 'middle',
                            legendOffset: 40,
                            ...axisBottom
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickValues: 5,
                            legendPosition: 'middle',
                            legendOffset: -40,
                            legend: axisLeftLegend,
                            ...axisLeft
                        }}
                        gridYValues={5}
                        layers={['grid', 'axes', 'bars']}
                        tooltip={(bar) => {
                            return (
                              <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                            );
                        }}
                    />
                </div>

                {/* legend */}
                <Legend />
            </Flex>
        </>
    )
}

export default GoalChart;
