import React, { useRef, useEffect, useState, useMemo } from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { CustomToolTip } from "../customToolTip";
import styled from "styled-components";

const fontSize = 12;
const lineHeight = 14;

const StyledText = styled.tspan`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  transition: font-weight 0.1s ease-in-out; /* smooth hover */
`;

const measureText = (text, fontSize = 12) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `${fontSize}px Roboto, sans-serif`;
  return context.measureText(text);
};

const wrapText = (text, width, fontSize = 12) => {
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

/* ---------------------------------------------------
   YLabel and XLabel (memoized, no layout reflow)
--------------------------------------------------- */
const YLabel = React.memo(({ cell, text, transX, transY, hoveredRow, textAnchor = "start", textStyle = {}, yLabelWidth }) => {
  text = text || "label";
  const lines = useMemo(() => wrapText(text, yLabelWidth, fontSize), [text, yLabelWidth]);
  const gHeight = lines.length * lineHeight;
  transY = transY || cell.y - gHeight / 2;

  return (
    <g transform={`translate(-${transX}, ${transY})`}>
      <text textAnchor={textAnchor}>
        {lines.map((line, index) => (
          <StyledText
            key={index}
            x={0}
            dy={index > 0 ? lineHeight : fontSize}
            style={{
              ...textStyle,
              fontWeight: text === hoveredRow ? "bold" : "normal",
            }}
          >
            {line}
          </StyledText>
        ))}
      </text>
    </g>
  );
});

const XLabel = React.memo(({ cell, text, transX, transY, hoveredCol, textAnchor = "start", textStyle = {}, rotate = -90, xLabelWidth, xLabelPadding, scalePadding, scaleTextPadding }) => {
  text = text || cell?.data?.x || "label";
  const lines = useMemo(() => wrapText(text, xLabelWidth, fontSize), [text, xLabelWidth]);
  const gWidth = lines.length * lineHeight; // approximate width
  transX = transX || cell.x - gWidth / 2;
  transY = transY || -(xLabelPadding + scalePadding + scaleTextPadding);

  return (
    <g transform={`translate(${transX}, ${transY}) rotate(${rotate})`}>
      <text textAnchor={textAnchor}>
        {lines.map((line, index) => (
          <StyledText
            key={index}
            x={0}
            dy={index > 0 ? lineHeight : fontSize}
            style={{
              ...textStyle,
              fontWeight: text === hoveredCol ? "bold" : "normal",
            }}
          >
            {line}
          </StyledText>
        ))}
      </text>
    </g>
  );
});

/* ---------------------------------------------------
   Main Heatmap Component
--------------------------------------------------- */
const MaterialHeatmap = ({
  data,
  height = 1300,
  margin = {},
  xLabelWidth = 120,
  xLabelPadding = 20,
  yLabelWidth = 200,
  yLabelPadding = 40,
  yNumeralWidth = 30,
  yNumeralPadding = 50,
  scalePadding = 10,
  scaleTextPadding = 5,
  tooltip = null,
}) => {
  const leftLegendWidth =
    yLabelWidth +
    yLabelPadding +
    yNumeralWidth +
    yNumeralPadding +
    scalePadding +
    scaleTextPadding;

  const [hovered, setHovered] = useState({ row: null, col: null });
  const containerRef = useRef(null);
  const [container, setContainer] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef?.current) return;
    const checkContainer = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setContainer({ width: rect.width, height: rect.height });
    };
    const resizeObserver = new ResizeObserver(checkContainer);
    resizeObserver.observe(containerRef.current);
    checkContainer();
    return () => resizeObserver.disconnect();
  }, []);

  const worthValues = useMemo(
    () =>
      data.reduce((acc, obj) => {
        acc[obj.id] = obj.worth;
        return acc;
      }, {}),
    [data]
  );

  // Label Layers
  let currName = null;
  const YLabelLayer = ({ cells }) =>
    cells.map((cell, idx) => {
      const name = cell?.serieId;
      if (name === currName) return null;
      currName = name;
      return (
        <YLabel
          key={`cell-ylabel-${idx}`}
          cell={cell}
          text={name}
          transX={leftLegendWidth}
          hoveredRow={hovered.row}
          yLabelWidth={yLabelWidth}
        />
      );
    });

  const YLabelTitleLayer = () => (
    <YLabel
      text={"Goederengroep"}
      transX={leftLegendWidth}
      transY={-20}
      textStyle={{ fontWeight: "bold" }}
      yLabelWidth={yLabelWidth}
    />
  );

  currName = null;
  const XLabelLayer = ({ cells }) =>
    cells.map((cell, idx) => {
      const name = cell?.serieId;
      if (name !== currName) return null;
      return (
        <XLabel
          key={`cell-xlabel-${idx}`}
          cell={cell}
          hoveredCol={hovered.col}
          xLabelWidth={xLabelWidth}
          xLabelPadding={xLabelPadding}
          scalePadding={scalePadding}
          scaleTextPadding={scaleTextPadding}
        />
      );
    });

  const XTitleLayer = () => (
    <XLabel
      text={"Kritieke grondstoffen"}
      transX={(container.width - leftLegendWidth) / 2 - xLabelWidth / 2}
      transY={-(xLabelPadding + scalePadding + scaleTextPadding + xLabelWidth)}
      rotate={0}
      textStyle={{ fontWeight: "bold" }}
      xLabelWidth={xLabelWidth}
      xLabelPadding={xLabelPadding}
      scalePadding={scalePadding}
      scaleTextPadding={scaleTextPadding}
    />
  );

  const handleMouseEnter = (cell) => {
    setHovered({ row: cell?.serieId, col: cell?.data?.x });
  };
  const handleMouseLeave = () => {
    setHovered({ row: null, col: null });
  };

  return (
    <>
      <GlobalStyle />
      <div ref={containerRef} style={{ height }}>
        <ResponsiveHeatMap
          data={data}
          margin={{
            top: xLabelWidth + xLabelPadding + scalePadding + scaleTextPadding,
            right: 0,
            bottom: 80,
            left: leftLegendWidth,
            ...margin,
          }}
          enableLabels={false}
          colors={{
            type: "diverging",
            scheme: "oranges",
            minValue: 0,
            maxValue: 100,
            divergeAt: 0.5,
          }}
          emptyColor="#FFFFFF"
          axisTop={null}
          axisLeft={null}
          layers={[
            "legends",
            "cells",
            YLabelLayer,
            YLabelTitleLayer,
            XLabelLayer,
            XTitleLayer,
          ]}
          tooltip={(cell) => (
            <CustomToolTip body={tooltip?.(cell) || <span>Tooltip</span>} />
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default MaterialHeatmap;
