import { Flows } from './Flows'
import { Legend } from './Legend'
import Background from './Background'
import { CustomToolTip } from "../../customToolTip";


const OverviewSankey = ({
    data,
    width='100%',
}) => {
    return (
        <>
            <svg
                width={width}
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
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                    padding: 10,
                    fontSize: 14,
                    width: 300,
                    zIndex: 999999
                }}
            />
        </>
    )
}

export default OverviewSankey