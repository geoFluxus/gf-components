import React from 'react'
import { Flex, Row, Col } from 'antd'
import GlobalStyle from "../../globalStyles";
import { Header, Progress } from "./comps"


const cards = {
    vervangen: {
        title: 'Vervangen',
        subtitle: 'Aandeel hernieuwbare en secundaire grondstoffen verhogen naar minimaal 55% (gebaseerd op DMI).',
        goals: {
            goal30: { renew: 50, other: 50},
            goal35: { renew: 55, other: 45},
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
            goal30: { total: 2051, raw: 1928, reduction: 2051 - 1928 },
            goal35: { total: 2051, raw: 1743, reduction: 2051 - 1743 },
            unit: 'kt'
        },
        legend: [
            {
                key: 'raw',
                name: 'Grondstoffengebruik',
                color: '#7BC6CE'
            },
            {

                key: 'reduction',
                name: 'Reduction',
                color: '#D0D5DD',
            }
        ]
    },
    behouden_verwerking: {
        title: 'Behouden (Verwerking)',
        subtitle: 'Percentage gerecycled afval verhogen naar minimaal 82% waarvan minimaal 15% hoogwaardige recycling.',
        goals: {
            goal30: { high: 11, other: 69, low: 20},
            goal35: { high: 55, other: 45, low: 12},
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
    behouden_hoeveelheid: {
        title: 'Behouden (Hoeveelheid)',
        subtitle: 'De totale hoeveelheid afval verlagen ten op zichte van 2016.',
        legend: [
            {
                name: 'Totale hoeveelheid afval',
                color: '#809399'
            },
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
                idx < 3 && <Col span={12} key={idx}>
                    <Card>
                        <Header
                            title={card?.title}
                            subtitle={card?.subtitle}
                            legend={card?.legend}
                        />
                        <Progress
                            year={year}
                            data={data?.[key]}
                            legend={card?.legend}
                        />
                        <Progress
                            year={year}
                            goals={card?.goals}
                            curr={false}
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
