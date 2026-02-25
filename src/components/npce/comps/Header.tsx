import { Flex } from "antd"


const Status = ({}) => {
    return (
        <Flex
            gap={8}
            justify="center"
            align="center"
            style={{
                padding: "4px 16px 4px 12px",
                borderRadius: 24,
                border: "1px solid #FFE58F",
                background: "#FFFBE6"
            }}
        >
            <span
                style={{
                    color: "#AD6800",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "22px"
                }}
            >
                {'2035 doel nog niet behaald'}
            </span>
        </Flex>
    )
}


const LegendItem = ({
    color,
    name
}) => {
    return (
        <>
            {name.toLowerCase() !== 'reduction' ?
                <Flex
                    gap={4}
                    align="center"
                >
                    <div
                        style={{
                            minWidth: 7,
                            minHeight: 7,
                            borderRadius: 3.5,
                            background: color
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
                        {name}
                    </span>
                </Flex>
                : null
            }
        </>
    )
}


const Legend = ({
    legend
}) => {
    return (
        <Flex
            gap={8}
            justify="center"
            wrap
        >
            {legend.map((item, idx) => {
                return (
                    <LegendItem
                        key={idx}
                        color={item?.color}
                        name={item?.name}
                    />
                )
            })}
        </Flex>
    )
}


const Header = ({
    title,
    subtitle,
    legend
}) => {
    return (
        <Flex
            vertical
            gap={16}
            style={{
                flexGrow: 1,
                padding: 16,
                boxSizing: "border-box",
                width: '100%',
            }}
        >
            <Flex
                gap={8}
                vertical
            >
                <Flex
                    gap={8}
                    justify="space-between"
                >
                    <span
                        style={{
                            color: "#1D2939",
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: 500,
                            lineHeight: "24px"
                        }}
                    >
                        {title}
                    </span>

                    <Status />
                </Flex>
                <span
                    style={{
                        color: "#475467",
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: "22px",
                    }}
                >
                    {subtitle}
                </span>
            </Flex>

            <Legend
                legend={legend}
            />
        </Flex>
    )
}

export default Header