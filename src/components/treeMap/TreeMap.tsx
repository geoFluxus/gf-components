import React, {useRef, useState, useEffect} from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { CustomToolTip } from "../customToolTip";
import { Flex, Typography } from 'antd'


export interface Props {
  treeMapData: object;
}

const { Text } = Typography

const useTextOverflow = (ref) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const parent = ref.current;

    if (!parent) return;

    const checkOverflow = () => {
      const parentRect = parent.getBoundingClientRect();

      // Calculate the combined dimensions of all children
      const totalChildrenHeight = Array.from(parent.children).reduce(
        (totalHeight, child) => totalHeight + child.getBoundingClientRect().height,
        0
      );

      // Check if children overflow the parent's height
      setIsOverflowing(totalChildrenHeight > parentRect.height);
    };

    // Create a ResizeObserver to monitor size changes
    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(parent);

    // Initial overflow check
    checkOverflow();

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return isOverflowing;
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
    const addAlpha = (color, opacity) => {
        // coerce values so it is between 0 and 1.
        var _opacity = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255);
        return color + _opacity.toString(16).toUpperCase();
    }
    return (
      <g transform={`translate(${node.x}, ${node.y})`}>
        <foreignObject
            width={node.width}
            height={node.height}
            style={{
                backgroundColor: addAlpha(node.color, nodeOpacity),
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
          layers={[CustomNodeLayer]}
        />
      </div>
    </>
  );
};

export default Sankey;
