import { Flex } from "antd"


const Header = ({
    title,
    bold
}) => {
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
                gap={4}
                align="center"
            >
                <div
                    style={{
                        minWidth: 7,
                        minHeight: 7,
                        borderRadius: 3.5,
                        background: "#86AA49"
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
                    {'37 %'}
                </span>
            </Flex>
        </Flex>
    )
}


const Bar = ({}) => {
    return (
        <div
            style={{
                width: '100%',
                height: 16,
                borderRadius: 12,
                background: "#D0D5DD"
            }}
        >
            <div
                style={{
                    width: '50%',
                    height: 16,
                    borderRadius: "12px 0 0 12px",
                    borderRight: "1px solid #FFF",
                    background: "#86AA49"
                }}
            />
        </div>
    )
}


const ProgressBar = ({
    title="",
    bold=false
}) => {
    return (
        <Flex
            gap={4}
            vertical
        >
            <Header
                title={title}
                bold={bold}
            />
            <Bar />
        </Flex>
    )
}


const Progress = ({
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
            />
            <ProgressBar
                title={curr ? `Huidig (${year})` : 'Doel (2035)'}
                bold={curr}
            />
        </Flex>
    )
}

export default Progress