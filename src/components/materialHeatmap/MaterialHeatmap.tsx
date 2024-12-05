import { useRef, useEffect, useState } from "react";
import GlobalStyle from "../../globalStyles"
import { ResponsiveHeatMap } from '@nivo/heatmap'
import { CustomToolTip } from "../customToolTip";
import styled from 'styled-components';


const fontSize = 12
const lineHeight = 14
const StyledText = styled.tspan`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
`

const measureText = (text, fontSize=12) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = `${fontSize}px Roboto`;

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


const MaterialHeatmap = ({
    data,
    height=1300,
    margin={},
    xLabelWidth=80,
    xLabelPadding=10,
    yLabelWidth=200,
    yLabelPadding=40,
    yNumeralWidth=30,
    yNumeralPadding=30,
    tooltip=null
}) => {
    // keep track of container dimensions
    const containerRef = useRef(null);
    const [container, setContainer] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        if (!containerRef?.current) return

        const checkContainer = () => {
            const rect = containerRef.current.getBoundingClientRect();
            setContainer({
                width: rect.width,
                height: rect.height
            });
        }

        // Create a ResizeObserver to monitor size changes
        const resizeObserver = new ResizeObserver(checkContainer);
        resizeObserver.observe(containerRef?.current);

        // Initial overflow check
        checkContainer();

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // collect worth values for y-labels
    const worthValues = data.reduce((acc, obj) => {
        acc[obj.id] = obj.worth;
        return acc;
    }, {});

    // y-label
    const YLabel = ({ cell, text, transX, transY, textAnchor="start", textStyle={} }) => {
        const gRef = useRef(null);
        const [gHeight, setGHeight] = useState(0);

        // wrap long text
        text = text || 'label'
        const lines = wrapText(text, yLabelWidth, fontSize);

        // track g height
        useEffect(() => {
            if (gRef.current) {
              const rect = gRef.current.getBoundingClientRect();
              setGHeight(rect.height);
            }
        }, []);

        // positioning
        transY = transY || cell.y - gHeight / 2

        return (
            <g ref={gRef} transform={`translate(-${transX}, ${transY})`} >
                <text
                    textAnchor={textAnchor}
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
                        style={textStyle}
                      >
                        {line}
                      </StyledText>
                    ))}
                </text>
            </g>
        )
    }


    // x-label
    const XLabel = ({ cell }) => {
        const gRef = useRef(null);
        const [gWidth, setGWidth] = useState(0);

        // wrap long text
        const text = cell?.data?.x || 'label'
        const lines = wrapText(text, xLabelWidth, fontSize);

        // track g height
        useEffect(() => {
            if (gRef.current) {
              const rect = gRef.current.getBoundingClientRect();
              setGWidth(rect.width);
            }
        }, []);

        // positioning
        const transX = cell.x - gWidth / 2
        const transY = - xLabelPadding

        return (
            <g ref={gRef} transform={`translate(${transX}, ${transY}) rotate(-90)`} >
                <text
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'left',
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

    // draw y-labels
    let currName = null
    const YLabelLayer = ({cells}) =>
        cells.map((cell, idx) => {
           const name = cell?.serieId
           if (name === currName) return
           currName = name
           return (<YLabel key={`cell-ylabel-${idx}`} cell={cell}
                    text={cell?.serieId}
                    transX={yLabelWidth + yLabelPadding + yNumeralWidth + yNumeralPadding} />)
        });
    const YLabelTitleLayer = ({cells}) =>
        cells.slice(0, 1).map((cell, idx) => {
           return (<YLabel key={`cell-ynumeral-${idx}`} cell={cell}
                    text={'Goederengroep'}
                    transX={yLabelWidth + yLabelPadding + yNumeralWidth + yNumeralPadding}
                    transY={-20}
                    textStyle={{fontWeight: 'bold'}}
                    />)
        });
    const YWorthLayer = ({cells}) =>
        cells.map((cell, idx) => {
           const name = cell?.serieId
           if (name === currName) return
           currName = name
           return (<YLabel key={`cell-ynumeral-${idx}`} cell={cell}
                    text={worthValues[name].toString()}
                    transX={yNumeralPadding}
                    textAnchor="end" />)
        });
    const YWorthTitleLayer = ({cells}) =>
        cells.slice(0, 1).map((cell, idx) => {
           return (<YLabel key={`cell-ynumeral-${idx}`} cell={cell}
                    text={'Invoerwaarde in mln €'}
                    transX={yNumeralPadding}
                    transY={-20}
                    textStyle={{fontWeight: 'bold'}}
                    textAnchor="end" />)
        });

    // draw x-labels
    currName = null
    const XLabelLayer = ({cells}) =>
        cells.map((cell, idx) => {
            const name = cell?.serieId
            if (name !== currName) return
            return (<XLabel key={`cell-ylabel-${idx}`} cell={cell} />)
        });

    // draw x-scale
    const XScaleLayer = () =>
        <g>
            <defs>
                <marker id="arrow-left" markerWidth="5" markerHeight="5" refX="0" refY="2.5" orient="auto">
                  <path d="M5,0 L0,2.5 L5,5 Z" fill="black" />
                </marker>
                <marker id="arrow-right" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="black" />
                </marker>
            </defs>
            <line x1="0" y1="-10"
                x2={container.width - (yLabelWidth + yLabelPadding + yNumeralWidth + yNumeralPadding)}
                y2="-10" stroke="black"
                strokeWidth="1"
                markerStart="url(#arrow-left)"
                markerEnd="url(#arrow-right)"
            />
        </g>

    // draw y-scale
    const YScaleLayer = () =>
        <g>
            <defs>
                <marker id="arrow-up" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                  <path d="M5,0 L0,2.5 L5,5 Z" fill="black" />
                </marker>
                <marker id="arrow-down" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="black" />
                </marker>
            </defs>
            <line x1="-10" y1="5" x2="-10" y2={container.height - 90} stroke="black" strokeWidth="1"
                markerStart="url(#arrow-up)"
                markerEnd="url(#arrow-down)"
            />
        </g>

    return (
        <>
            <GlobalStyle />
            <div ref={containerRef} style={{height: height}}>
                <ResponsiveHeatMap
                    data={data}
                    margin={{
                        top: 90,
                        right: 0,
                        bottom: 0,
                        left: yLabelWidth + yLabelPadding + yNumeralWidth + yNumeralPadding,
                        ...margin
                    }}
                    enableLabels={false}
                    colors={{
                        type: 'diverging',
                        scheme: 'oranges',
                        minValue: 0,
                        maxValue: 100,
                        divergeAt: 0.5
                    }}
                    emptyColor="#555555"
                    axisTop={null}
                    axisLeft={null}
                    layers={[
                        'cells',
                        YLabelLayer, YLabelTitleLayer,
                        YWorthLayer, YWorthTitleLayer,
                        XScaleLayer,
                        YScaleLayer
                    ]}
                    tooltip={(cell) => {
                        return (
                          <CustomToolTip body={ tooltip?.(cell) || <span>Tooltip</span>} />
                        );
                    }}
                />
            </div>
        </>
    )
}

export default MaterialHeatmap