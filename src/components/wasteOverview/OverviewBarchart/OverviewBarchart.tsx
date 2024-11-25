import { useRef, useEffect, useState } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { data } from './data'
import styled from 'styled-components';


const StyledText = styled.span`
  font: var(--gf-label-md-default);
  color: var(--gf-color-text-secondary);
  font-size: 10px;
  line-height: 14px;
`

const OverviewBarchart = ({
    height=900,
    margin={},
    labelWidth=100,
    labelPadding=10
}) => {
    const CustomNode = ({ bar }) => {
        const foreignObjectRef = useRef(null);
        const contentRef = useRef(null);
        const [height, setHeight] = useState(100);

        useEffect(() => {
            const adjustHeight = () => {
              if (contentRef.current) {
                console.log(contentRef.current.offsetHeight)
                setHeight(contentRef.current.offsetHeight);
              }
            };

            adjustHeight();
        }, []);

        const data = bar.data.data
        const transX = labelWidth + labelPadding
        const transY = bar.y + bar.height / 2 - height / 2
        return (
            <g transform={`translate(-${transX}, ${transY})`}>
                <foreignObject
                    width={100}
                    height={height}
                    ref={foreignObjectRef}
                >
                  <div
                    ref={contentRef}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                  >
                    <StyledText>{`${data?.idx}.`}</StyledText>
                    <StyledText>{data?.name}</StyledText>
                  </div>
                </foreignObject>
            </g>
        )
    }

    // @ts-ignore
    let currName = null
    const CustomNodeLayer = ({ bars }) =>
        bars.map((bar) => {
           name = bar?.data?.data?.name
           if (name === currName) return
           currName = name
           return (<CustomNode bar={bar} />)
        });

    const reverseData = data.slice().reverse()
    return (
        <div style={{height: height}}>
            <ResponsiveBar
                data={reverseData}
                colors={({ id, data }) => String(data[`${id}Color`])}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 0, bottom: 50, left: 110, ...margin }}
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
            />
        </div>
    )
}

export default OverviewBarchart