import { ResponsiveBar } from '@nivo/bar'
import { Flex } from 'antd'
import { CustomToolTip } from "../customToolTip";


const defaultMap = {
    goodsRenewable: '#36CFC9',
    goodsNotRenewable: '#BDE7E3',
    goodsMixed: '#00474F',
    wasteRenewable: '#FFA940',
    wasteNotRenewable: '#EEDBBB',
    wasteMixed: '#873800'
}

const names = {
    goodsRenewable: 'Goederen - Hernieuwbare materialen',
    goodsNotRenewable: 'Goederen - Niet-hernieuwbare materialen',
    goodsMixed: 'Goederen - Gemengde materialen',
    wasteRenewable: 'Afval - Hernieuwbare materialen',
    wasteNotRenewable: 'Afval - Niet-hernieuwbare materialen',
    wasteMixed: 'Afval - Gemengde materialen',
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
            const not_renewable = barData?.[`${key}NotRenewable`] || 0
            const mixed = barData?.[`${key}Mixed`] || 0

            const renewHeight = total ? (bar.height * renewable) / total : 0
            const notRenewHeight = total ? (bar.height * not_renewable) / total : 0
            const mixedHeight = total ? (bar.height * mixed) / total : 0

            return (
                <g key={idx}>
                    {/* Renewable segment */}
                    <rect
                        x={bar.x}
                        y={bar.y + notRenewHeight + mixedHeight}
                        width={bar.width}
                        height={renewHeight}
                        fill={colorMap[`${key}Renewable`]}
                    />
                    {/* Not-Renewable segment */}
                    <rect
                        x={bar.x}
                        y={bar.y + mixedHeight}
                        width={bar.width}
                        height={notRenewHeight}
                        fill={colorMap[`${key}NotRenewable`]}
                    />
                    {/* Mixed segment */}
                    <rect
                        x={bar.x}
                        y={bar.y}
                        width={bar.width}
                        height={mixedHeight}
                        fill={colorMap[`${key}Mixed`]}
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

    console.log(data)
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
