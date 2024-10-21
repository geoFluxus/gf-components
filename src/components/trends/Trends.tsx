import React from "react";
import GlobalStyle from "../../globalStyles";
import { ResponsiveLine, Serie } from "@nivo/line";

export interface Props {
  trendsData: readonly Serie[];
  xLeg: string;
  yLeg: string
}

const Trends: React.FC<Props> = ({ trendsData, xLeg, yLeg }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "95%", height: "100vh" }}>
        <ResponsiveLine
          data={trendsData}
          margin={{ top: 50, right: 190, bottom: 50, left: 90 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
        //yFormat={(value) => (numeral(value).format('+ 0,.[00]'))}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: xLeg,
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yLeg,
          legendOffset: -70,
          legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 210,
            translateY: -40,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 200,
            itemHeight: 20,
            itemOpacity: 0.9,
            symbolSize: 8,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        />
      </div>
    </>
  );
};

export default Trends;
