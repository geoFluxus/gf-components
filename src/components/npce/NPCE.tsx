import React from 'react'
import { Flex, Row, Col } from 'antd'
import GlobalStyle from "../../globalStyles";
import { Header, Progress } from "./comps"


const cards = {
    vervangen: {
        title: 'Vervangen',
        subtitle: 'Aandeel hernieuwbare en secundaire grondstoffen verhogen naar minimaal 55% (gebaseerd op DMI).',
        legend: [
            {
                name: 'Hernieuwbare & secundaire grondstoffen',
                color: '#84B08D'
            },
            {
                name: 'Overige grondstoffen',
                color: '#D0D5DD'
            }
        ]
    },
    besparen: {
        title: 'Besparen',
        subtitle: 'Grondstoffengebruik verlagen met 15% ten op zichte van 2016 (gebaseerd op DMI).',
        legend: [
            {
                name: 'Grondstoffengebruik',
                color: '#7BC6CE'
            },
        ]
    }
}



const Divider = () =>
    <div
        style={{
            height: 1,
            width: '100%',
            background: "#DAE1ED"
        }}
    />

const Card = ({children}) => {
    const num = children ?.length

    return (
        <Flex
            vertical
            align="center"
            style={{
                height: "100%",
                borderRadius: 8,
                border: "1px solid #DAE1ED",
                overflow: "hidden"
            }}
        >
            {children.map((child, idx) =>
                <React.Fragment
                    key={idx}
                >
                    {child}
                    {idx < num - 1 ? <Divider /> : <></>}
                </React.Fragment>
            )}
        </Flex>
    )
}

const NPCE = ({
    data,
}) => {
  return (
    <>
      <GlobalStyle />

      <Row gutter={[16, 16]}>
        {Object.entries(cards).map(([key, card], idx) => {
            return (
                <Col span={12}>
                    <Card>
                        <Header
                            title={card?.title}
                            subtitle={card?.subtitle}
                            legend={card?.legend}
                        />
                        <Progress />
                        <Progress curr={false} />
                    </Card>
                </Col>
            )
        })}
      </Row>
    </>
  );
};

export default NPCE;
