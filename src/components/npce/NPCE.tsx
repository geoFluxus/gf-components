import React from 'react'
import { Flex, Row, Col } from 'antd'
import GlobalStyle from "../../globalStyles";
import { Header, Progress } from "./comps"


const cards = {
    vervangen: {
        title: 'Vervangen',
        subtitle: 'Aandeel hernieuwbare en secundaire grondstoffen verhogen naar minimaal 55% (gebaseerd op DMI).',
        goals: {
            begin: { renew: 50, other: 50},
            curr: { renew: 55, other: 45},
            unit: '%'
        },
        legend: [
            {
                key: 'renew',
                name: 'Hernieuwbare & secundaire grondstoffen',
                color: '#86AA49'
            },
            {
                key: 'other',
                name: 'Overige grondstoffen',
                color: '#D0D5DD',
                hide: true,
                arrow: true
            }
        ]
    },
    besparen: {
        title: 'Besparen',
        subtitle: 'Grondstoffengebruik verlagen met 15% ten op zichte van 2016 (gebaseerd op DMI).',
        goals: {
            begin: { total: 2051, raw: 1928, reduction: 2051 - 1928 },
            curr: { total: 2051, raw: 1743, reduction: 2051 - 1743 },
            unit: 'kt'
        },
        legend: [
            {
                key: 'raw',
                name: 'Grondstoffengebruik',
                color: '#7BC6CE',
            },
            {

                key: 'reduction',
                name: 'Reduction',
                color: '#D0D5DD',
            }
        ]
    },
    behouden_hoeveelheid: {
        title: 'Behouden (Hoeveelheid)',
        subtitle: 'De totale hoeveelheid afval verlagen ten op zichte van 2016.',
        goals: {
            begin: { total: 275, raw: 275 * 0.85, reduction: 275 * 0.15 },
            curr: { total: 275, raw: 275 * 0.85, reduction: 275 * 0.15 },
            unit: 'kt'
        },
        legend: [
            {
                key: 'raw',
                name: 'Totale hoeveelheid afval',
                color: '#809399',
                lower: true,
            },
            {

                key: 'reduction',
                name: 'Reduction',
                color: '#D0D5DD',
                lower: true
            }
        ]
    },
    behouden_verwerking: {
        title: 'Behouden (Verwerking)',
        subtitle: 'Percentage gerecycled afval verhogen naar minimaal 82% waarvan minimaal 15% hoogwaardige recycling.',
        goals: {
            begin: { high: 11, other: 69, low: 20},
            curr: { high: 15, other: 67, low: 18},
            unit: '%'
        },
        legend: [
            {
                key: 'high',
                name: 'Hoogwaardige recycling',
                color: '#226123'
            },
            {
                key: 'other',
                name: 'Overige recycling',
                color: '#84B08D'
            },
            {
                key: 'low',
                name: 'Verbranden/Storten',
                color: '#D0D5DD',
            }
        ]
    },
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
    year
}) => {
  return (
    <>
      <GlobalStyle />

      <Row gutter={[16, 16]}>
        {Object.entries(cards).map(([key, card], idx) => {
            return (
                <Col span={12} key={idx}>
                    <Card>
                        <Header
                            title={card?.title}
                            subtitle={card?.subtitle}
                            legend={card?.legend}
                        />
                        <Progress
                            year={year}
                            data={data?.[key]}
                            curr={true}
                            legend={card?.legend}
                        />
                        <Progress
                            year={year}
                            data={card?.goals}
                            legend={card?.legend}
                        />
                    </Card>
                </Col>
            )
        })}
      </Row>
    </>
  );
};

export default NPCE;
