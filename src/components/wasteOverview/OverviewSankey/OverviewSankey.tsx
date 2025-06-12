import { forwardRef } from 'react';
import { Flows } from './Flows'
import { Legend } from './Legend'
import Background from './Background'
import { CustomToolTip } from "../../customToolTip";


const OverviewSankey = forwardRef(({
    data,
    height='100%',
}, ref) => {
    return (
        <div style={{position: 'relative'}}>
            <svg
                ref={ref}
                height={height}
                viewBox="0 0 602 508"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Background />
                <Flows data={data} svgRef={ref} />
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
})

export default OverviewSankey