import React from "react";
import { ResponsiveScatterPlot, ScatterPlotDatum, ScatterPlotRawSerie } from '@nivo/scatterplot'
import GlobalStyle from "../../globalStyles";
import LineTarget from "./LineTarget";

export interface Props {
  scatterPlotData: ScatterPlotRawSerie<ScatterPlotDatum>[],

}

const ScatterPlot: React.FC<Props> = ({ scatterPlotData }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveScatterPlot
          data={scatterPlotData}
          margin={{ top: 20, right: 120, bottom: 20, left: 120 }}

          layers= {[
            'grid',
          'markers',
          'axes',
          'nodes',
          'legends',
          LineTarget
          ]}
        />
      </div>
    </>
  );
};

export default ScatterPlot;
