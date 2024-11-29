import { useRef } from 'react';
import { Flows } from './Flows'
import { Legend } from './Legend'
import Background from './Background'
import { CustomToolTip } from "../../customToolTip";


const OverviewSankey = ({
    data,
    width='100%',
}) => {
    const svgRef = useRef(null)

    return (
        <div style={{position: 'relative'}}>
            <svg
                ref={svgRef}
                width={width}
                viewBox="0 0 602 626"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Background />
                <Flows data={data} svgRef={svgRef} />
                <Legend />
            </svg>

            <CustomToolTip
                id={'overview-sankey-tooltip'}
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    padding: 10,
                    fontSize: 14,
                    width: 300,
                    zIndex: 999999,
                }}
            />
        </div>
    )
}

export default OverviewSankey