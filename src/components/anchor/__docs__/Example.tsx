import React, { FC, useRef } from "react";
import { Flex } from "antd"
import Anchor from "../Anchor";
import GlobalStyle from "../../../globalStyles";
import styled from "styled-components";

const Section =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const Title = styled.span`
    font: var(--gf-label-md-default);
    font-size: 38px;
    line-height: 46px;
    font-weight: 600;
`;

const Text = styled.span`
    font: var(--gf-label-md-default);
    font-size: 16px;
    line-height: 32px;
`;


const Example: FC<GFButtonProps> = ({
}) => {
    const overviewMaterialsRef = useRef(null)
    const overviewHighlightsRef = useRef(null)
    const overviewSankeyRef = useRef(null)
    const overviewStreamsRef = useRef(null)

    const items = [
        {name: 'Materialen voor de economie en consumptie door de jaren heen', href: overviewMaterialsRef},
        {name: 'Uitgelicht', href: overviewHighlightsRef},
        {name: 'Goederen- en afvalstromenoverzicht', href: overviewSankeyRef},
        {name: 'Invoer en aanbod per gebruikscategorie', href: overviewStreamsRef}
    ]

    return (
        <>
            <GlobalStyle />
            <Flex>
                <Anchor
                    items={items}
                    containerStyle={{paddingTop: 0}}
                    headerOffset={16}
                    bannerOffset={0}
                />
                <Flex
                    vertical
                    gap={64}
                    style={{
                        paddingInline: 120
                    }}
                >
                    <Section ref={overviewMaterialsRef}>
                        <Title>
                            Materialen voor de economie en consumptie door de jaren heen
                        </Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Section>
                    <Section ref={overviewHighlightsRef}>
                        <Title>
                            Uitgelicht
                        </Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Section>
                    <Section ref={overviewSankeyRef}>
                        <Title>
                            Goederen- en afvalstromenoverzicht
                        </Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Section>
                    <Section ref={overviewStreamsRef}>
                        <Title>
                            Invoer en aanbod per gebruikscategorie
                        </Title>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Section>
                </Flex>
            </Flex>
        </>
    );
};

export default Example;