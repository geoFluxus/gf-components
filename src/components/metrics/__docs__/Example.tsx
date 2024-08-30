import React from "react";
import Metrics from "../Metrics";
import '../Metrics.css'

const Example = ({
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Metrics 
        percent={35} 
        cost={18.6} 
        description={'van de totale importwaarde waren machines en apparaten'}
      />
    </div>
  );
};

export default Example;