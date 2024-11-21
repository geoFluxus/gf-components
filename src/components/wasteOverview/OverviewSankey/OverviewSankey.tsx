import { Flows } from './Flows'
import { Legend } from './Legend'
import Background from './Background'


const OverviewSankey = () => {
    return (
        <svg width='100%' height='100%' viewBox="0 0 894 568" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Background />
            <Flows />
            <Legend />
        </svg>
    )
}

export default OverviewSankey