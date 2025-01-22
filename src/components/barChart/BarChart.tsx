import { useRef, useEffect, useState } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { CustomToolTip } from "../customToolTip";
import styled from 'styled-components';
import { Flex } from 'antd'
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


const BarChart = ({
    data=[],
    height=600,
    margin={},
    padding=0.5,
    keys=null,
    indexBy=null,
    tooltip=null,
    enableLabel=false,
    label=null,
    keyLabelWidth=120,
    keyLabelPadding=20,
    axisBottom={},
    layers=['grid', 'axes'],
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
        const transX = keyLabelWidth + keyLabelPadding
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
        const text = label?.(bar.data)
        const metrics = measureText(text, fontSize),
              textWidth = metrics.actualBoundingBoxRight + metrics.actualBoundingBoxLeft,
              textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
        if (textWidth >= bar.width) return (<></>)

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
                    <StyledText style={{fontSize: fontSize}}>{text || 'label'}</StyledText>
                </text>
            </g>
        )
    }

    const CustomLabelLayer = ({ bars }) =>
        bars.map((bar, idx) => {
           return (<CustomLabel key={`bar-inner-label-${idx}`} bar={bar} />)
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
            name: key,
            color: data[0]?.[`${key}Color`],
            defs
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

    const reverseData = data.slice().reverse()
    layers.push('bars')
    if (enableLabel) layers.push(CustomLabelLayer)
    if (zeroMarker) layers.push(ZeroMarkLayer)
    return (
        <>
            <GlobalStyle />
            <Flex vertical gap={8} style={{width: "100%"}}>
                <div style={{height: height}}>
                    <ResponsiveBar
                        data={reverseData}
                        colors={({ id, data }) => String(data[`${id}Color`])}
                        defs={defs}
                        fill={fill}
                        keys={keys}
                        indexBy={indexBy}
                        margin={{ top: -10, right: 0, bottom: 50, left: 140, ...margin }}
                        layout="horizontal"
                        enableGridY={false}
                        enableGridX={false}
                        padding={padding}
                        enableLabel={false}
                        axisBottom={{
                            tickSize: 5,
                            legendPosition: 'middle',
                            legendOffset: 40,
                            ...axisBottom
                        }}
                        axisLeft={null}
                        layers={[...layers, CustomNodeLayer]}
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

export default BarChart