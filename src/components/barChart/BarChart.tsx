import { useRef, useEffect, useState } from "react";
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

const wrapText = (text, width, fontSize=12) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontSize}px Roboto`;

    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = `${currentLine} ${words[i]}`;
        const testWidth = context.measureText(testLine).width;
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
    labelWidth=120,
    labelPadding=20,
    axisBottom={}
}) => {
    const CustomNode = ({ bar }) => {
        const gRef = useRef(null);
        const [gHeight, setGHeight] = useState(0);

        // wrap long text
        const text = bar?.data?.indexValue || 'label'
        const lines = wrapText(text, labelWidth, fontSize);

        // track g height
        useEffect(() => {
            if (gRef.current) {
              const rect = gRef.current.getBoundingClientRect();
              setGHeight(rect.height);
            }
        }, []);

        // positioning
        const transX = labelWidth + labelPadding
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


    const Legend = ({data, keys}) => {
        const legend = keys?.map(key => ({
            name: key,
            color: data[0]?.[`${key}Color`]
        }))

        return (
            <Flex gap={16} className='gf-full' justify="center" wrap>
                {legend.map(l =>
                    <Flex gap={8} align="center">
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

    const reverseData = data.slice().reverse()
    return (
        <Flex vertical gap={8}>
            <div style={{height: height}}>
                <ResponsiveBar
                    data={reverseData}
                    colors={({ id, data }) => String(data[`${id}Color`])}
                    keys={keys}
                    indexBy={indexBy}
                    margin={{ top: -10, right: 0, bottom: 50, left: 140, ...margin }}
                    layout="horizontal"
                    enableGridY={false}
                    enableGridX={false}
                    padding={padding}
                    enableLabel={false}
                    axisBottom={axisBottom}
                    axisLeft={null}
                    layers={['grid', 'axes', 'bars', CustomNodeLayer]}
                    tooltip={(bar) => {
                        return (
                          <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                        );
                    }}
                />
            </div>
            <Legend data={data} keys={keys}/>
        </Flex>
    )
}

export default BarChart