import GlobalStyle from "../../globalStyles"
import { ResponsiveBar } from '@nivo/bar'
import { CustomToolTip } from "../customToolTip";


const ImpactTrend = ({
    data,
    height = 500,
    padding = 0.2,
    keys = ["total"],
    indexBy = "year",
    margin = {},
    axisBottom = {},
    axisLeft = {},
    color = "orange",
    tooltip = null,
    valueFormat = null
}) => {
    return (
        <div style={{height: height}}>
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy={indexBy}
                colors={color}
                margin={{left: 50, bottom: 50, top: 10, right: 50, ...margin}}
                padding={padding}
                valueFormat={d => valueFormat?.(d) || d}
                axisBottom={{
                    tickSize: 5,
                    legendPosition: 'middle',
                    legendOffset: 40,
                    ...axisBottom
                }}
                axisLeft={{
                    tickSize: 5,
                    legendPosition: 'middle',
                    legendOffset: -40,
                    ...axisLeft
                }}
                tooltip={(bar) => {
                    return (
                      <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                    );
                }}
            />
        </div>
    )
}

export default ImpactTrend