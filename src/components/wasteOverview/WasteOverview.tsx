import { OverviewSankey } from './OverviewSankey'
import { OverviewBarchart } from './OverviewBarchart'


const WasteOverview = ({
    sankey={},
    bar={}
}) => {
    return (
        <>
            <OverviewSankey {...sankey} />
            <OverviewBarchart {...bar} />
        </>
    )
}

export default WasteOverview