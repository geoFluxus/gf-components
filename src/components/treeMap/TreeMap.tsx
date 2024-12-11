import React, {useRef, useState, useEffect} from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { CustomToolTip } from "../customToolTip";
import styled from 'styled-components';
import { Flex, Typography } from 'antd'


export interface Props {
  treeMapData: object;
  tooltip: ({ node }) => JSX.Element;
}

const { Text } = Typography


const StyledText = styled.tspan`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-primary);
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


function applyOpacityToColor(color, opacity) {
    // If the color is already in RGBA, just modify the alpha (opacity)
    if (color.startsWith('rgba')) {
        return color.replace(/rgba?\((\d+), (\d+), (\d+),? ([\d.]+)?\)/, (_, r, g, b, a) => {
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        });
    }

    // If the color is in RGB, convert it to RGBA
    if (color.startsWith('rgb')) {
        return color.replace(/rgb\((\d+), (\d+), (\d+)\)/, (_, r, g, b) => {
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        });
    }

    // If the color is in HSL, convert it to HSLA
    if (color.startsWith('hsl')) {
        return color.replace(/hsl\((\d+), (\d+)%?, (\d+)%?\)/, (_, h, s, l) => {
            return `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
        });
    }

    // If the color is in HSLA, just modify the alpha (opacity)
    if (color.startsWith('hsla')) {
        return color.replace(/hsla?\((\d+), (\d+)%?, (\d+)%?,? ([\d.]+)?\)/, (_, h, s, l, a) => {
            return `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
        });
    }

    // If the color is in Hex format, convert it to RGBA and apply opacity
    if (color.startsWith('#')) {
        const rgb = hexToRgb(color);
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    }

    throw new Error("Unsupported color format");
}

// Convert Hex to RGB
function hexToRgb(hex) {
    const hexColor = hex.startsWith('#') ? hex.slice(1) : hex;
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    return { r, g, b };
}


const Sankey: React.FC<Props> = ({
    treeMapData,
    style={},
    colors={scheme: 'nivo'},
    identity="name",
    value="loc",
    margin={},
    nodeOpacity=0.67,
    labelTextColor='black',
    borderColor='white',
    labelTitle='name',
    labelTitleSize=16,
    labelTitleLineHeight=20,
    labelText='name',
    labelTextSize=10,
    labelTextLineHeight=14,
    labelPadding=5,
    labelGap=8,
    tooltip=null
}) => {
  const CustomNode = ({ node }) => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const [titleOverflows, setTitleOverflows] = useState(false);
    const [descriptionOverflows, setDescriptionOverflows] = useState(false);

    const checkOverflow = () => {
        if (!titleRef.current || !descriptionRef.current) return;

        const titleRect = titleRef.current.getBoundingClientRect();
        const descriptionRect = descriptionRef.current.getBoundingClientRect();

        const maxWidth = Math.max(titleRect.width, descriptionRect.width);
        const totalHeight =
          titleRect.height +
          descriptionRect.height +
          labelGap;

        // Check for title overflow
        setTitleOverflows(
          titleRect.height > node.height - labelPadding * 2 ||
          titleRect.width > node.width - labelPadding * 2
        );

        // Check for description overflow
        setDescriptionOverflows(
          totalHeight > node.height - labelPadding * 2 ||
          maxWidth > node.width - labelPadding * 2
        );
    };

    useEffect(() => {
        checkOverflow();
    }, []);

    if (node.isParent) return null
    const labelTitleContent = node?.data?.[labelTitle] || 'Title'
    const titleLines = wrapText(labelTitleContent, node.width - labelPadding * 2, labelTitleSize);
    const newLabelGap =
        titleLines.length * labelTitleSize +
        (titleLines.length - 1) * (labelTitleLineHeight - labelTitleSize) +
        labelGap

    const labelTextContent = node?.data?.[labelText]  || 'Title'
    const textLines = wrapText(labelTextContent, node.width - labelPadding * 2, labelTextSize);

    return (
      <g transform={`translate(${node.x}, ${node.y})`}>
        <rect
            width={node.width}
            height={node.height}
            fill={applyOpacityToColor(node.color, nodeOpacity)}
            strokeWidth={1}
            stroke={borderColor}
        />

        {!titleOverflows &&
            <text ref={titleRef}>
                {titleLines.map((line, idx) => (
                    <StyledText
                        key={idx}
                        x={labelPadding}
                        y={labelPadding + labelTitleSize + idx * labelTitleLineHeight}
                        style={{fontSize: labelTitleSize, fontWeight: 'bold'}}
                    >
                        {line}
                    </StyledText>
                ))}
            </text>
        }

        {!titleOverflows && !descriptionOverflows &&
            <text ref={descriptionRef}>
                {textLines.map((line, idx) => (
                    <StyledText
                        key={idx}
                        x={labelPadding}
                        y={labelPadding + labelTitleSize + newLabelGap + idx * labelTextLineHeight}
                        style={{fontSize: labelTextSize}}
                    >
                        {line}
                    </StyledText>
                ))}
            </text>
        }
      </g>
    );
  };

  // @ts-ignore
  const CustomNodeLayer = ({ nodes }) =>
    nodes.map((node) => <CustomNode key={node.id} node={node} />);

  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600, ...style }}>
        <ResponsiveTreeMap
          data={treeMapData}
          colors={colors}
          identity={identity}
          value={value}
          margin={{ top: 10, right: 10, bottom: 10, left: 10, ...margin }}
          enableParentLabel={false}
          enableLabel={false}
          nodeOpacity={0}
          borderWidth={0}
          tooltip={({ node }) => {
            return (
              <CustomToolTip body={ tooltip?.({node}) || <span>Treemap tooltip</span>} />
            );
          }}
          layers={[CustomNodeLayer, 'nodes']}
        />
      </div>
    </>
  );
};

export default Sankey;
