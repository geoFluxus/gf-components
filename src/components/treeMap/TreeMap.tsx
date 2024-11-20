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
    colors=null,
    identity=null,
    value=null,
    margin={},
    labelTextColor='black',
    borderColor='white',
    labelTitle=null,
    labelTitleSize=16,
    labelText=null,
    labelTextSize=10,
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
        setTitleOveflows(rect.height > node.height || rect.width > node.width);
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
            descriptionRect.height + titleRect.height > node.height ||
            maxWidth > node.width
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
    console.log(node)
    return (
      <g transform={`translate(${node.x}, ${node.y})`}>
        <foreignObject
            width={node.width}
            height={node.height}
            style={{backgroundColor: node.color, border: `1px solid ${borderColor}`}}
        >
          <div
            style={{
              font: 'var(--gf-label-lg-default)',
              color: labelTextColor,
              padding: 5,
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
          colors={colors || {scheme: 'nivo'}}
          identity={identity || "name"}
          value={value || "loc"}
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
