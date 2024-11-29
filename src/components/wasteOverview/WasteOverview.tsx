import { useRef } from 'react';
import { OverviewSankey, Legend } from './OverviewSankey'
import { OverviewBarchart } from './OverviewBarchart'
import { Row, Col } from "antd"


const WasteOverview = ({
    sankey={},
    bar={}
}) => {
    const sankeyRef = useRef(null)
    console.log(sankeyRef)

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col span={12}>
                    <OverviewSankey ref={sankeyRef} {...sankey} />
                </Col>
                <Col span={12}>
                    <OverviewBarchart {...bar} />
                </Col>
            </Row>
            <Legend />
        </>
    )
}

export default WasteOverview