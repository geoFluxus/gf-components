import { Flows } from './Flows'
import { Legend } from './Legend'
import Background from './Background'
import { CustomToolTip } from "../../customToolTip";


const OverviewSankey = ({
    data,
    width='100%',
    height='100%'
}) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 894 568"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Background />
                <Flows data={data} />
                <Legend />
            </svg>

            <CustomToolTip
                id={'overview-sankey-tooltip'}
                style={{visibility: 'hidden'}}
            />
        </>
    )
}

export default OverviewSankey