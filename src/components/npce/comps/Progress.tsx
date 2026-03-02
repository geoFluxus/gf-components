import React from "react"
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
                            {
                             !l?.hide &&
                             !(l?.key === 'reduction' && l?.lower && !curr) &&
                             !(l?.key === "reduction" && perc === 0) &&
                                 <>
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
                                          l?.key === "reduction"
                                            ? (perc > 0 ? `↓${perc}%` : perc < 0 ? `↑${Math.abs(perc)}%` : null)
                                            : (l?.lower && !curr)
                                            ? `↓totaal omlaag`
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


const Bar = ({ data, curr, legend }) => {
  const arrowPerc = 8

  // Remove reduction items for bar rendering logic
  const segments = legend?.filter(l => l.key !== "reduction") ?? []

  // Compute widths
  const widths = segments.map(l => data?.value?.[l?.key] ?? 0)

  // Find first & last visible (non-zero) segments
  const firstVisibleIndex = widths.findIndex(w => w > 0)
  const lastVisibleIndex =
    widths.length - 1 - [...widths].reverse().findIndex(w => w > 0)

  return (
    <Flex style={{ height: 16 }}>
      {legend?.map((l, idx) => {
        const width = data?.value?.[l?.key] ?? 0

        // If reduction, render separately
        if (l?.key === "reduction") {
          return (
            width > 0 && (
              <Flex
                key={idx}
                align="center"
                style={{
                  width: `${width}%`,
                  height: "100%",
                }}
              >
                <Arrow
                  color="#98A2B3"
                  rotate={180}
                  transform="rotate(180deg)"
                  showVerticalLine
                />
              </Flex>
            )
          )
        }

        // Find index among non-reduction segments
        const segmentIndex = segments.findIndex(s => s.key === l.key)

        const isFirst = segmentIndex === firstVisibleIndex
        const isLast = segmentIndex === lastVisibleIndex

        const arrow = l?.arrow && !curr && width > arrowPerc
        const arrowWidth = width > 0 ? (arrowPerc / width) * 100 : 0

        return (
          <div
            key={idx}
            style={{
              width: `${width}%`,
              position: "relative",
              borderRadius:
                isFirst && isLast
                  ? 12
                  : isFirst
                    ? "12px 0 0 12px"
                    : isLast
                      ? "0 12px 12px 0"
                      : 0,
              borderRight:
                !isLast ? "1px solid #FFF" : "none",
              background:
                !curr && !l?.hide
                  ? `repeating-linear-gradient(
                      -60deg,
                      rgba(255,255,255,0.35) 0px,
                      rgba(255,255,255,0.35) 1px,
                      transparent 1px,
                      transparent 3px
                    ), ${l?.color}`
                  : l?.color,
            }}
          >
            {arrow && (
              <Flex
                align="center"
                style={{
                  width: `${arrowWidth}%`,
                  height: "100%",
                }}
              >
                <Arrow />
              </Flex>
            )}
          </div>
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
                title={curr ? 'Beginpunt (2016)' : 'Doel (2030)'}
                data={{
                    value: data?.begin,
                    unit: data?.unit,
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