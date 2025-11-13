import { ResponsiveBar } from '@nivo/bar'
import { Flex } from 'antd'
import { CustomToolTip } from "../customToolTip";


const defaultMap = {
    goodsRenewable: '#36CFC9',
    goodsOther: '#BDE7E3',
    wasteRenewable: '#FFA940',
    wasteOther: '#EEDBBB',
}

const names = {
    goodsRenewable: 'Goederen - Hernieuwbare materialen',
    goodsOther: 'Goederen - Overige materialen',
    wasteRenewable: 'Afval - Hernieuwbare materialen',
    wasteOther: 'Afval - Overige materialen',
}

const RenewableTrend = ({
    data,
    height = 400,
    colorMap = defaultMap,
    margin = {},
    padding = 0.3,
    innerPadding = 4,
    tooltip = null,
    axisBottom = {},
    axisLeft = {}
}) => {
    const CustomLayer = (props) =>
        props.bars.map((bar, idx) => {
            const id = bar.data.id
            const barData = bar.data.data
            const key = id?.replace('Total', '')
            const total = barData?.[`${key}Total`]
            const renewable = barData?.[`${key}Renewable`] || 0
            const other = barData?.[`${key}Other`] || 0

            const renewHeight = total ? (bar.height * renewable) / total : 0
            const otherHeight = total ? (bar.height * other) / total : 0

            return (
                <g key={idx}>
                    {/* Renewable segment */}
                    <rect
                        x={bar.x}
                        y={bar.y + otherHeight}
                        width={bar.width}
                        height={renewHeight}
                        fill={colorMap[`${key}Renewable`]}
                    />
                    {/* Other segment */}
                    <rect
                        x={bar.x}
                        y={bar.y - 1}
                        width={bar.width}
                        height={otherHeight}
                        fill={colorMap[`${key}Other`]}
                    />
                </g>
            )
        })

    const Legend = () => {
        return (
            <Flex
                justify='center'
                gap={16}
                wrap
            >
                {Object.entries(defaultMap).map(([label, color], index) => (
                    <Flex
                        key={index}
                        align='center'
                        gap={8}
                    >
                        <div
                            style={{
                                width: 16,
                                height: 16,
                                background: color,
                            }}
                        />
                        <span style={{ fontSize: 12 }}>{names?.[label]}</span>
                    </Flex>
                ))}
            </Flex>
        );
    };


    return (
        <Flex vertical gap={8}>
            <div
                style={{
                    position: 'relative',
                    height,
                    width: '100%',
                    overflow: 'visible',
                }}
            >
                <ResponsiveBar
                    data={data}
                    keys={['goodsTotal', 'wasteTotal']}
                    indexBy="year"
                    groupMode="grouped"
                    padding={padding}
                    innerPadding={innerPadding}
                    enableLabel={false}
                    colors={(c) => 'rgba(0, 0, 0, 0)'}
                    margin={{
                        top: 50,
                        right: 0,
                        bottom: 50,
                        left: 60,
                        ...margin,
                    }}
                    axisLeft={{
                        legend: 'Gewicht (Mt)',
                        legendPosition: 'middle',
                        legendOffset: -40,
                        ...axisLeft
                    }}
                    axisBottom={{
                        legend: 'Jaar',
                        legendPosition: 'middle',
                        legendOffset: 40,
                        ...axisBottom
                    }}
                    layers={['axes', 'grid', CustomLayer, 'bars']}
                    tooltip={(bar) => {
                        return (
                          <CustomToolTip body={ tooltip?.(bar) || <span>Tooltip</span>} />
                        );
                    }}
                />
            </div>
            <Legend />
        </Flex>
    )
}

export default RenewableTrend
