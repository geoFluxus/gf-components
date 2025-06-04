import GlobalStyle from "../../globalStyles"
import { ResponsiveBar } from '@nivo/bar'
import { CustomToolTip } from "../customToolTip";
import styled from 'styled-components';
import { Flex } from 'antd'


const fontSize = 12
const lineHeight = 14
const StyledText = styled.tspan`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
`

const StyledLabel = styled.span`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: 10px;
  line-height: ${lineHeight}px;
`

const measureText = (text, fontSize=12) => {
    console.log(text)
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontSize}px Roboto, sans-serif`;

    return context.measureText(text)
}


const colorMap = {
  "Biomassa en voedsel": "hsla(205, 40%, 79%, 1)",
  Kunststoffen: "hsla(83, 47%, 73%, 1)",
  Bouwmaterialen: "hsla(4, 55%, 75%, 1)",
  Consumptiegoederen: "hsla(35, 74%, 73%, 1)",
  Overig: "hsla(269, 24%, 77%, 1)",
  Maakindustrie: "hsla(26, 74%, 58%, 1)",
}

const ImpactTrend = ({
    data,
    height = 500,
    padding = 0.2,
    keys = Object.keys(colorMap),
    indexBy = "year",
    margin = {},
    axisBottom = {},
    axisLeft = {},
    color = {},
    tooltip = null,
    label=null
}) => {
    const CustomLabel = ({bar}) => {
        const fontSize = 10

        // text
        const text = label?.(bar.data) || 'label'
        const metrics = measureText(text, fontSize),
              textWidth = metrics.width,
              textHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
        if (textHeight >= bar.height) return (<></>)

        // positioning
        const transX = bar.x + bar.width / 2 - textWidth / 2
        const transY = bar.y + bar.height / 2 + textHeight / 2

        return (
            <g transform={`translate(${transX}, ${transY})`} >
                <text
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignmentBaseline: 'middle',
                    }}
                >
                    <StyledText style={{fontSize: fontSize}}>{text}</StyledText>
                </text>
            </g>
        )
    }
    const CustomLabelLayer = ({ bars }) =>
        bars.map((bar, idx) => {
           return (<CustomLabel key={`bar-inner-label-${idx}`} bar={bar} />)
        });

    const Legend = ({data, keys}) => {
        const legend = keys?.map(key => ({
            name: key,
            color: colorMap[key]
        }))

        return (
            <Flex gap={16} className='gf-full' justify="center" wrap>
                {legend.map((l, idx) =>
                    <Flex gap={8} align="center" key={`legend-${idx}`}>
                        <div style={{
                            minWidth: 16,
                            minHeight: 16,
                            backgroundColor: l.color
                        }} />
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
                <div style={{height: height}}>
                    <ResponsiveBar
                        data={data}
                        keys={keys}
                        indexBy={indexBy}
                        colors={({ id, data }) => {
                            return colorMap[id] || "orange"
                        }}
                        enableLabel={false}
                        margin={{left: 50, bottom: 50, top: 10, right: 50, ...margin}}
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
                        layers={[
                            'grid',
                            'axes',
                            'bars',
                            CustomLabelLayer
                        ]}
                        tooltip={(bar) => {
                            return (
                              <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                            );
                        }}
                    />
                </div>
                <Legend data={data} keys={keys}/>
            </Flex>
        </>
    )
}

export default ImpactTrend