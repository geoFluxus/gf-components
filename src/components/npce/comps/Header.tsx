import { Flex } from "antd"
import { CheckCircleFilled } from "@ant-design/icons";


const Status = ({success}) => {
    return (
        <Flex
            gap={8}
            justify="center"
            align="center"
            style={{
                padding: "4px 16px 4px 12px",
                borderRadius: 24,
                border: "1px solid",
                borderColor: success ? "#B7EB8F" : "#FFE58F",
                background: success ? "#F6FFED" : "#FFFBE6",
                color: success ? "#389E0D" : "#AD6800",
                textAlign: "center",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "22px"
            }}
        >
            {success && <CheckCircleFilled />}
            {success ? '2035 doel behaald' : '2035 doel nog niet behaald'}
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
    legend,
    success,
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
                style={{
                    flexGrow: 1,
                }}
            >
                <Flex
                    gap={8}
                    justify="space-between"
                >
                    <span
                        style={{
                            color: "#1D2939",
                            textAlign: "left",
                            fontSize: 16,
                            fontWeight: 500,
                            lineHeight: "24px"
                        }}
                    >
                        {title}
                    </span>

                    <Status success={success} />
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