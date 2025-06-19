import { useRef, useEffect, useState } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { CustomToolTip } from "../customToolTip";
import styled from 'styled-components';
import { Flex, Row, Col } from 'antd'
import GlobalStyle from "../../globalStyles";


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
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontSize}px Roboto, sans-serif`;

    return context.measureText(text)
}

const wrapText = (text, width, fontSize=12) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = `${currentLine} ${words[i]}`;
        const testWidth = measureText(testLine, fontSize).width;
        if (testWidth > width) {
          lines.push(currentLine);
          currentLine = words[i];
        } else {
          currentLine = testLine;
        }
    }
    lines.push(currentLine);

    return lines;
};


const colorMap = {
    crm: 'hsl(36, 100%, 50%)', // blue
    value: 'hsl(197, 100%, 19%)', // orange
}


const BarChart = ({
    data=[],
    height=1300,
    margin={},
    padding=0.3,
    innerPadding=3,
    keys=null,
    indexBy=null,
    tooltip=null,
    enableLabel=false,
    label=null,
    keyLabelWidth=200,
    keyLabelPadding=20,
    graphGap=40,
    axisBottom={},
    layers=['grid', 'axes', 'bars', 'markers'],
    zeroMarker=false,
    defs=[],
    fill=[]
}) => {
    const CustomNode = ({ bar }) => {
        const gRef = useRef(null);
        const [gHeight, setGHeight] = useState(0);

        // wrap long text
        const text = bar?.data?.indexValue || 'label'
        const lines = wrapText(text, keyLabelWidth, fontSize);

        // track g height
        useEffect(() => {
            if (gRef.current) {
              const rect = gRef.current.getBoundingClientRect();
              setGHeight(rect.height);
            }
        }, []);

        // positioning
        const transX = keyLabelPadding
        const transY = bar.y + bar.height / 2 - gHeight / 2

        return (
            <g ref={gRef} transform={`translate(-${transX}, ${transY})`} >
                <text
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignmentBaseline: 'middle',
                    }}
                >
                    {lines.map((line, index) => (
                      <StyledText key={index} x={0}
                        dy={index > 0 ? lineHeight : fontSize}
                        textAnchor="end"
                      >
                        {line}
                      </StyledText>
                    ))}
                </text>
            </g>
        )
    }

    let currName = null
    const CustomNodeLayer = ({ bars }) =>
        bars.map((bar, idx) => {
           name = bar?.data?.id
           if (name !== currName && currName !== null) return
           currName = name
           return (<CustomNode key={`bar-label-${idx}`} bar={bar} />)
        });


    const CustomLabel = ({bar}) => {
        const fontSize = 10

        // text
        const number = bar?.data?.value,
              text = (number >= 1) ? `${number.toFixed(1)}` : '<0.1%'
        const metrics = measureText(text, fontSize),
              textWidth = metrics.actualBoundingBoxRight + metrics.actualBoundingBoxLeft,
              textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent

        // positioning
        const transX = bar.x + bar.width + 10
        const transY = bar.y + bar.height / 2 + textHeight / 2

        return (
            <g transform={`translate(${transX}, ${transY})`} >
                <text
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignmentBaseline: 'middle',
                      fill: colorMap[bar?.data?.id]
                    }}
                >
                    <StyledText style={{fontSize: fontSize, fontWeight: 500}}>{text}</StyledText>
                </text>
            </g>
        )
    }

    const CustomLabelLayer = ({ bars }) =>
        bars.map((bar, idx) => {
           return (<CustomLabel key={`bar-inner-label-${idx}`} bar={bar} />)
        });

    const CustomGrid = ({bar}) => {
        const labels = bar?.data?.id === "value",
              x1 = labels ? 0 : - graphGap / 2,
              y = bar?.y + bar?.height / 2
        return (
            <g>
                <line x1={x1} y1={y} x2="2000" y2={y} stroke="#e1e1e1" strokeWidth="1" />
            </g>
        )
    }

    const CustomGridLayer = ({ bars }) =>
        bars.map((bar, idx) => {
            return (<CustomGrid key={`bar-grid-${idx}`} bar={bar} />)
        });


    const Legend = ({data, keys}) => {
        const defsObj = defs.reduce((acc, item) => {
            acc[item.id] = { ...item };
            delete acc[item.id].id; // Remove the `id` field if it's not needed in the final object
            return acc;
        }, {});

        const fillObj = fill.reduce((acc, item) => {
            if (item.match && item.match.id) {
                acc[item.match.id] = item.id;
            }
            return acc;
        }, {});

        const legend = keys?.map(key => ({
            name: key == "crm" ? "Kritieke grondstoffen" : "Invoerwaarde",
            color: colorMap[key],
            defs
        }))

        return (
            <Flex gap={16} className='gf-full' justify="center" wrap>
                {legend.map((l, idx) =>
                    <Flex gap={8} align="center" key={`legend-${idx}`}>
                        <div style={{
                            minWidth: 8,
                            minHeight: 8,
                            backgroundColor: l.color
                        }} />
                        <StyledLabel>{l.name}</StyledLabel>
                    </Flex>
                )}
            </Flex>
        )
    }

    const ZeroMarkLayer = (props) => {
        let key = null, zeroX = 0
        props?.bars?.forEach(bar => {
            if (bar?.data?.id !== key && key !== null) return
            key = bar?.data?.id
            if (bar.x > zeroX) zeroX = bar.x
        })

        return (
            <g>
              <line
                x1={zeroX}
                y1={0}
                x2={zeroX}
                y2={props?.height - 40 + 5}
                stroke={"red"}
                strokeWidth={3}
              />
            </g>
        )
    }

    const Barchart = ({value, labels}) => {
        return (
            <div style={{height: height}}>
                <ResponsiveBar
                    data={reverseData}
                    colors={({ id, data }) => {
                        return colorMap[id]
                    }}
                    defs={defs}
                    fill={fill}
                    keys={[value]}
                    indexBy={indexBy}
                    groupMode="grouped"
                    margin={{
                        right: graphGap / 2,
                        bottom: 50,
                        left: labels ? keyLabelWidth + keyLabelPadding : graphGap / 2,
                        ...margin
                    }}
                    layout="horizontal"
                    enableGridY={false}
                    enableGridX={true}
                    padding={padding}
                    innerPadding={innerPadding}
                    enableLabel={false}
                    axisBottom={{
                        tickSize: 5,
                        legendPosition: 'middle',
                        legendOffset: 40,
                        legend: value == 'value' ? 'Percentage (%)' : 'Index'
                    }}
                    axisLeft={null}
                    layers={[CustomGridLayer, ...layers, ...(labels ? [CustomNodeLayer] : [])]}
                    tooltip={(bar) => {
                        return (
                          <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                        );
                    }}
                    markers={[
                        {
                          axis: 'x',
                          value: 0,
                          lineStyle: { stroke: '#000000', strokeWidth: 1 },
                        },
                    ]}
                />
            </div>
        )
    }

    const reverseData = data.slice().reverse()
    return (
        <>
            <GlobalStyle />
            <Flex vertical gap={8} style={{width: "100%"}}>
                <Legend data={data} keys={keys}/>
                <Row gutter={[0, 0]}>
                    <Col span={15}>
                        <Barchart value="value" labels={true} />
                    </Col>
                    <Col span={9}>
                        <Barchart value={"crm"} />
                    </Col>
                </Row>
            </Flex>
        </>
    )
}

export default BarChart