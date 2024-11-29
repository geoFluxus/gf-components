import { useRef, useEffect, useState } from 'react';
import { OverviewSankey, Legend } from './OverviewSankey'
import { OverviewBarchart } from './OverviewBarchart'
import { Row, Col } from "antd"


const WasteOverview = ({
    sankey={},
    bar={}
}) => {
    const sankeyRef = useRef(null)
    const [height, setHeight] = useState(null)

    const updateHeight = () => {
        if (sankeyRef.current) {
            setHeight(sankeyRef.current.clientHeight);
        }
    };

    useEffect(() => {
        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
          window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col span={12}>
                    <OverviewSankey ref={sankeyRef} {...sankey} />
                </Col>
                <Col span={12}>
                    <OverviewBarchart {...bar} height={height} />
                </Col>
            </Row>
            <Legend />
        </>
    )
}

export default WasteOverview