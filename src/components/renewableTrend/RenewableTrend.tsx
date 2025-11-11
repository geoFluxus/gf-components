import { ResponsiveBar } from '@nivo/bar'
import { Flex } from 'antd'
import { useState } from 'react'


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

const CustomTooltip = ({ x, y, label, value, color, tooltip }) => (
    <div
        style={{
            position: 'fixed',
            top: y,
            left: x,
            background: 'white',
            padding: '6px 10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            pointerEvents: 'none',
            color: '#333',
            transform: 'translate(-50%, -100%)',
            zIndex: 10,
        }}
    >
        {tooltip?.() || 'Tooltip text'}
    </div>
)

const RenewableTrend = ({
    data,
    height = 400,
    colorMap = defaultMap,
    margin = {},
    padding = 0.3,
    innerPadding = 4,
    tooltipBody = null,
    axisBottom = {},
    axisLeft = {}
}) => {
    const [tooltip, setTooltip] = useState(null)

    const handleMouseMove = (event, label, value, color) => {
        setTooltip({
            x: event.clientX,
            y: event.clientY,
            label,
            value,
            color,
            tooltip: tooltipBody
        })
    }

    const handleMouseLeave = () => setTooltip(null)

    const CustomLayer = (props) =>
        props.bars.map((bar, idx) => {
            const id = bar.data.id
            const barData = bar.data.data
            const key = id?.replace('Total', '')
            const total = barData?.[`${key}Total`]
            const renewable = barData?.[`${key}Renewable`]
            const other = barData?.[`${key}Other`]

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
                        style={{cursor: 'pointer'}}
                        onMouseMove={(e) =>
                            handleMouseMove(
                                e,
                                `${key} Renewable`,
                                renewable,
                                colorMap[`${key}Renewable`]
                            )
                        }
                        onMouseLeave={handleMouseLeave}
                    />
                    {/* Other segment */}
                    <rect
                        x={bar.x}
                        y={bar.y - 1}
                        width={bar.width}
                        height={otherHeight}
                        fill={colorMap[`${key}Other`]}
                        style={{cursor: 'pointer'}}
                        onMouseMove={(e) =>
                            handleMouseMove(
                                e,
                                `${key} Other`,
                                other,
                                colorMap[`${key}Other`]
                            )
                        }
                        onMouseLeave={handleMouseLeave}
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
                    layers={['axes', 'grid', CustomLayer]}
                />
                {tooltip && <CustomTooltip {...tooltip} />}
            </div>
            <Legend />
        </Flex>
    )
}

export default RenewableTrend
