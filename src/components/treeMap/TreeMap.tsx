import React, {useRef, useState, useEffect} from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { CustomToolTip } from "../customToolTip";
import { Flex, Typography } from 'antd'


export interface Props {
  treeMapData: object;
  tooltip: ({ node }) => JSX.Element;
}

const { Text } = Typography

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
    labelText='name',
    labelTextSize=12,
    labelPadding=10,
    labelGap=10,
    labelLineHeight=14,
    tooltip=null
}) => {
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

  const CustomNode = ({ node }) => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const [titleOveflows, setTitleOveflows] = useState(false);
    const [descriptionOveflows, setDescriptionOveflows] = useState(false);

    const checkOverflow = () => {
        if (!titleRef?.current || !descriptionRef?.current) return

        const titleRect = titleRef.current.getBoundingClientRect(),
              descriptionRect = descriptionRef.current.getBoundingClientRect(),
              maxWidth = Math.max([descriptionRect, titleRect])

        setTitleOveflows(
            titleRect.height > node.height - labelPadding * 2 ||
            titleRect.width > node.width - labelPadding * 2
        );

        setDescriptionOveflows(
            descriptionRect.height + titleRect.height + labelLineHeight > node.height - labelPadding * 2 ||
            maxWidth > node.width - labelPadding * 2
        );
    }

    useEffect(() => {
      checkOverflow();
    }, []);

    const description = node?.data?.[labelText] || 'Text'
    const lines = wrapText(description, node.width - labelPadding * 2, labelTextSize);

    if (node.isParent) return (<></>)
    return (
      <g transform={`translate(${node.x}, ${node.y})`}>
        <rect
            width={node.width}
            height={node.height}
            style={{
                fill: applyOpacityToColor(node.color, nodeOpacity),
                stroke: borderColor,
                strokeWidth: 1
            }}
        />
        {!titleOveflows &&
            <text
                ref={titleRef}
                dominantBaseline="hanging"
                x={labelPadding}
                y={labelPadding}
                style={{
                    fill: labelTextColor,
                    font: 'var(--gf-label-lg-default)',
                    fontWeight: "bold",
                    fontSize: labelTitleSize
                }}
            >
                {node?.data?.[labelTitle] || 'Title'}
            </text>
        }
        {!titleOveflows && !descriptionOveflows &&
            <text
                ref={descriptionRef}
                dominantBaseline="hanging"
            >
                {lines.map((line, index) => (
                  <tspan
                    key={index}
                    x={labelPadding}
                    y={labelPadding + labelTitleSize + labelGap + labelLineHeight * index}
                    style={{
                        fill: labelTextColor,
                        font: 'var(--gf-label-lg-default)',
                        fontSize: labelTextSize
                    }}
                  >
                    {line}
                  </tspan>
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
      <div ref={containerRef} style={{ width: "100%", height: 600, ...style }}>
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
