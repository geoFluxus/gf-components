import React from 'react'
import { Flex, Row, Col } from 'antd'
import GlobalStyle from "../../globalStyles";
import { Header, Progress } from "./comps"


const cards = {
    vervangen: {
        title: 'Vervangen',
        subtitle: 'Aandeel hernieuwbare en secundaire grondstoffen verhogen naar minimaal 55% (gebaseerd op DMI).',
        check: [
            // renewable at least 55%
            (status, goal) => status?.curr?.['renew'] >= 55
        ],
        goals: {
            begin: { renew: 50, other: 50 },
            curr: { renew: 55, other: 45 },
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
        check: [
            // 15% reduction with 2016
            (status, goal) => {
                const curr = status?.curr?.['raw'],
                      ref = status?.begin?.['raw']
                return (ref - curr) / ref * 100 >= 15
            }
        ],
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
        check: [
            // reduction with 2016
            (status, goal) => {
                const curr = status?.curr?.['raw'],
                      ref = status?.begin?.['raw']
                return curr< ref
            }
        ],
        lower: true,
        legend: [
            {
                key: 'raw',
                name: 'Totale hoeveelheid afval',
                color: '#809399',
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
        check: [
            // 82% high & other recycling
            (status, goal) => {
                const curr = status?.curr?.['high'] + status?.curr?.['other']
                return curr >= 82
            },
            // 15% high recycling
            (status, goal) => status?.curr?.['high'] >= 15
        ],
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

function validate(a, b, checks = []) {
  return checks.every(
    check => typeof check === "function" && check(a, b)
  );
}

const NPCE = ({
    data,
    year
}) => {
  // update cards
  Object.keys(cards).forEach(key => {
      // update goals based on data
      cards[key].goals = data[key]?.goals || cards[key].goals;

      // mark legend items for lower goals
      cards[key].legend = cards[key].legend.map(l => ({...l, lower: cards[key]?.lower}))

      // success mark
      const check = cards[key]?.check
      const reduce = cards[key]?.reduce
      const status = data[key]
      const goal = cards[key].goals
      cards[key].success = validate(status, goal, check)
  });

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
                            success={card?.success}
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
