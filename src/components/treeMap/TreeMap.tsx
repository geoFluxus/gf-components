import React, {useRef, useState, useEffect} from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { CustomToolTip } from "../customToolTip";
import { Flex, Typography } from 'antd'


export interface Props {
  treeMapData: object;
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
    labelTextSize=10,
    labelPadding=5,
    tooltip=null
}) => {
  const CustomNode = ({ node }) => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const [titleOveflows, setTitleOveflows] = useState(false);
    const [descriptionOveflows, setDescriptionOveflows] = useState(false);

    useEffect(() => {
      if (!titleRef?.current) return

      const checkOverflow = () => {
        const rect = titleRef.current.getBoundingClientRect();

        // Check if children overflow the parent's height
        setTitleOveflows(
            rect.height > node.height - labelPadding * 2 ||
            rect.width > node.width - labelPadding * 2
        );
      };

      // Create a ResizeObserver to monitor size changes
      const resizeObserver = new ResizeObserver(checkOverflow);
      resizeObserver.observe(titleRef?.current);

      // Initial overflow check
      checkOverflow();

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      if (!descriptionRef?.current) return
      if (!titleRef?.current) return

      const checkOverflow = () => {
        const descriptionRect = descriptionRef.current.getBoundingClientRect(),
              titleRect = titleRef.current.getBoundingClientRect(),
              maxWidth = Math.max([descriptionRect, titleRect])

        // Check if children overflow the parent's height
        setDescriptionOveflows(
            descriptionRect.height + titleRect.height > node.height - labelPadding * 2 ||
            maxWidth > node.width - labelPadding * 2
        );
      };

      // Create a ResizeObserver to monitor size changes
      const resizeObserver = new ResizeObserver(checkOverflow);
      resizeObserver.observe(titleRef?.current);

      // Initial overflow check
      checkOverflow();

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    if (node.isParent) return (<></>)
    return (
      <g transform={`translate(${node.x}, ${node.y})`}>
        <foreignObject
            width={node.width}
            height={node.height}
            style={{
                backgroundColor: applyOpacityToColor(node.color, nodeOpacity),
                border: `1px solid ${borderColor}`,
            }}
        >
          <div
            style={{
              font: 'var(--gf-label-lg-default)',
              color: labelTextColor,
              padding: labelPadding,
              display: titleOveflows ? 'none' : 'auto'
            }}
          >
            <div ref={titleRef} style={{fontSize: labelTitleSize, display: 'inline-block'}}>
                <b>{node?.data?.[labelTitle] || 'Title'}</b>
            </div>
            <div style={{display: descriptionOveflows ? 'none' : 'auto'}}>
                <div ref={descriptionRef} style={{fontSize: labelTextSize, display: 'inline-block', }}>
                    {node?.data?.[labelText] || 'Text'}
                </div>
            </div>
          </div>
        </foreignObject>
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
              <CustomToolTip body={ tooltip?.({node}) || <span>Scatterplot tooltip</span>} />
            );
          }}
          layers={[CustomNodeLayer, 'nodes']}
        />
      </div>
    </>
  );
};

export default Sankey;
