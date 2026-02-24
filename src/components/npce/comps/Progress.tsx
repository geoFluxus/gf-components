import { Flex } from "antd"


const Header = ({
    title,
    data,
    goal,
    legend,
    bold
}) => {
    const isPerc = goal?.unit === '%'

    return (
        <Flex
            justify="space-between"
            align="center"
        >
            <span
                style={{
                    color: "#475467",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: bold ? 700 : 400,
                    lineHeight: "22px"
                }}
            >
                {title}
            </span>

            <Flex
                gap={8}
            >
                {legend.map((l, idx) => {
                    if (l?.hide) return (<></>)
                    return (
                        <Flex
                            key={idx}
                            gap={4}
                            align="center"
                        >
                            <div
                                style={{
                                    minWidth: 7,
                                    minHeight: 7,
                                    borderRadius: 3.5,
                                    background: l?.color
                                }}
                            />
                            <span
                                style={{
                                    color: "#667085",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    lineHeight: "14px"
                                }}
                            >
                                {
                                    data?.value ?
                                    `${data?.value?.[l?.key]}${data?.unit}` :
                                    `${isPerc ? 'Minstens ' : ''} ${goal?.value?.[l?.key]}${goal?.unit}`
                                }
                            </span>
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}


const Bar = ({
    data,
    goal,
    legend
}) => {
    const isPerc = goal?.unit === '%'
    const total = isPerc ? 100 : 100
    const num = legend?.length

    return (
        <Flex>
            {legend?.map((l, idx) => {
                const width = (data?.value || goal?.value)?.[l?.key] / total * 100
                return (
                    <div
                        style={{
                            width: `${width}%`,
                            height: 16,
                            borderRadius:
                                (num === 1) ? 12 :
                                (idx === 0) ? "12px 0 0 12px" :
                                (idx === num - 1) ? "0 12px 12px 0" :
                                0
                            ,
                            borderRight:
                                (num !== 1 && idx < num - 1) ? "1px solid #FFF" : "none"
                            ,
                            background: isPerc && !l?.hide
                              ? `repeating-linear-gradient(
                                  -60deg,
                                  rgba(255,255,255,0.1) 0px,
                                  rgba(255,255,255,0.1) 1px,
                                  transparent 1px,
                                  transparent 3px
                                ), ${l?.color}`
                              : l?.color
                        }}
                    />
                )
            })}
        </Flex>
    )
}


const ProgressBar = ({
    title="",
    data,
    goal,
    legend,
    bold=false
}) => {
    return (
        <Flex
            gap={4}
            vertical
        >
            <Header
                title={title}
                data={data}
                goal={goal}
                bold={bold}
                legend={legend}
            />
            <Bar
                data={data}
                goal={goal}
                legend={legend}
            />
        </Flex>
    )
}


const Progress = ({
    data,
    goals,
    legend,
    curr=true,
    year=2023,
}) => {
    return (
        <Flex
            gap={16}
            vertical
            style={{
                width: "100%",
                boxSizing: "border-box",
                padding: 16,
                background: curr ? '#FFFFFF' : "#F2F4F7"
            }}
        >
            <ProgressBar
                title={curr ? 'Begintpunt (2016)' : 'Doel (2030)'}
                data={{
                    value: data?.begin,
                    unit: data?.unit
                }}
                goal={{
                    value: goals?.goal30,
                    unit: goals?.unit
                }}
                legend={legend}
            />
            <ProgressBar
                title={curr ? `Huidig (${year})` : 'Doel (2035)'}
                data={{
                    value: data?.curr,
                    unit: data?.unit
                }}
                goal={{
                    value: goals?.goal35,
                    unit: goals?.unit
                }}
                bold={curr}
                legend={legend}
            />
        </Flex>
    )
}

export default Progress