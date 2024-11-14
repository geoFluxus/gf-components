import React, { FC } from "react";
import VisSelectors from "../VisSelectors";
import { GFCard } from "../../card"
import { useState, useEffect } from 'react'


const Example = ({selectors}) => {
  const [state, setState] = useState({
    industries: null,
    procMethods: null
  })

  useEffect(() => {
  }, [state]);

  const updateState = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: 800
          }}
        >
          <VisSelectors selectors={selectors} setter={updateState} />
        </div>
        <p>{JSON.stringify(state)}</p>
    </>
  );
};

export default Example;
