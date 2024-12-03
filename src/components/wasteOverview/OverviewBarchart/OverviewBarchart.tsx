import { useRef, useEffect, useState } from "react";
import { ResponsiveBar } from '@nivo/bar'
import styled from 'styled-components';
import { CustomToolTip } from "../../customToolTip";
import { flows } from "../flows"


const fontSize = 12
const lineHeight = 14
const StyledText = styled.tspan`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: ${fontSize}px;
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


const OverviewBarchart = ({
    data=null,
    height=600,
    margin={},
    labelWidth=120,
    labelPadding=20,
    keys=keys,
    indexBy=null,
    tooltip=null
}) => {
    const CustomNode = ({ bar }) => {
        const gRef = useRef(null);
        const [gHeight, setGHeight] = useState(0);

        // wrap long text
        const data = bar.data.data
        const numeral = flows?.[data?.[indexBy]]?.key
        const name = flows?.[data?.[indexBy]]?.name
        const text = `${numeral}. ${name}`
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
                      <StyledText key={index} x={index == 0 ? 0 : (numeral < 10) ? 14 : 20}
                        dy={index > 0 ? lineHeight : fontSize}
                      >
                        {line}
                      </StyledText>
                    ))}
                </text>
            </g>
        )
    }

    // @ts-ignore
    let currName = null
    const CustomNodeLayer = ({ bars }) =>
        bars.map((bar, idx) => {
           name = bar?.data?.id
           if (name !== currName && currName !== null) return
           currName = name
           return (<CustomNode key={`bar-label-${idx}`} bar={bar} />)
        });

    const reverseData = data.slice().reverse()
    return (
        <div style={{height: height}}>
            <ResponsiveBar
                data={reverseData}
                colors={(node) => nodeColor}
                keys={keys}
                indexBy={indexBy}
                margin={{ top: 30, right: 10, bottom: 0, left: 140, ...margin }}
                layout="horizontal"
                enableGridY={false}
                enableGridX={true}
                padding={0.5}
                enableLabel={false}
                axisTop={{
                    tickSize: 5
                }}
                axisBottom={null}
                axisLeft={null}
                layers={['grid', 'axes', 'bars', CustomNodeLayer]}
                tooltip={(bar) => {
                    return (
                      <CustomToolTip body={ tooltip?.(bar) || <span>Overview barchart tooltip</span>} />
                    );
                }}
            />
        </div>
    )
}

export default OverviewBarchart