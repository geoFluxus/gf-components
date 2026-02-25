import { Flex } from "antd"
import Arrow from './Arrow'


const Header = ({
    title,
    data,
    legend,
    curr,
    bold
}) => {
    const isPerc = data?.unit === '%'

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
                    const value = data?.value?.[l?.key]
                    const unit = data?.unit
                    const perc = Math.round(value / data?.value?.total * 100)

                    return (
                        <Flex
                            key={idx}
                            gap={4}
                            align="center"
                        >
                            {!l?.hide &&
                                <>
                                    { !(l?.key === "reduction" && perc == 0) &&
                                        <div
                                            style={{
                                                minWidth: 7,
                                                minHeight: 7,
                                                borderRadius: 3.5,
                                                background: l?.color
                                            }}
                                        />
                                    }
                                    <span
                                        style={{
                                            color: "#667085",
                                            fontSize: 12,
                                            fontWeight: 400,
                                            lineHeight: "14px"
                                        }}
                                    >
                                        {
                                          l?.key === "reduction"
                                            ? (perc > 0 ? `↓${perc}%` : null)
                                            : `${isPerc && !curr ? "Minstens " : ""}${value}${unit}`
                                        }
                                    </span>
                                </>
                            }
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}


const Bar = ({
    data,
    curr,
    legend
}) => {
    const isPerc = data?.unit === '%'
    const num = legend?.filter(item => item.key !== 'reduction')?.length

    return (
        <Flex>
            {legend?.map((l, idx) => {
                const width =
                  data?.value?.[l?.key] / 100 * 100
                const arrow =
                    l?.arrow && !curr && width >= 5
                const arrowWidth = width > 0
                    ? (5 / width) * 100
                    : 0

                return (
                    <>
                        {l?.key !== 'reduction' &&
                            <div
                                key={idx}
                                style={{
                                    width: `${width}%`,
                                    height: 16,
                                    position: "relative",
                                    borderRadius:
                                        (num === 1) ? 12 :
                                        (idx === 0) ? "12px 0 0 12px" :
                                        (idx === num - 1) ? "0 12px 12px 0" :
                                        0,
                                    borderRight:
                                        (num !== 1 && idx < num - 1)
                                            ? "1px solid #FFF"
                                            : "none",
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
                            >
                                {arrow && (
                                    <div
                                        style={{
                                            width: `${arrowWidth}%`,
                                            height: "100%"
                                        }}
                                    >
                                        <Arrow
                                            transform={`translateY(-30%)`}
                                         />
                                    </div>
                                )}
                            </div>
                        }
                        {l?.key === 'reduction' && width > 0 &&
                            <div
                                style={{
                                    width: `${width}%`,
                                    height: "100%"
                                }}
                            >
                                <Arrow
                                    color="#98A2B3"
                                    rotate={180}
                                    transform={`translateY(-30%) rotate(180deg)`}
                                    showVerticalLine
                                />
                            </div>
                        }
                    </>
                )
            })}
        </Flex>
    )
}


const ProgressBar = ({
    title="",
    data,
    legend,
    curr=false,
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
                curr={curr}
                bold={bold}
                legend={legend}
            />
            <Bar
                data={data}
                legend={legend}
                curr={curr}
            />
        </Flex>
    )
}


const Progress = ({
    data,
    legend,
    curr=false,
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
                legend={legend}
                curr={curr}
            />
            <ProgressBar
                title={curr ? `Huidig (${year})` : 'Doel (2035)'}
                data={{
                    value: data?.curr,
                    unit: data?.unit
                }}
                bold={curr}
                curr={curr}
                legend={legend}
            />
        </Flex>
    )
}

export default Progress