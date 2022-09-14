/* eslint-disable */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const changeCalculation = (event) => {
    const result = event.target.value;
    const calculation = calculate(state, result);
    setState(calculation);
  };

  const displayResult = (event) => {
    setState({ total: event.target.value });
  };

  const { total, next, operation } = state;
  return (
    <div className="main">
      <h2>Let's do some math!</h2>
      <div className="calculator">
        <div className="screen" onChange={displayResult}>
          {total} {operation} {next}
        </div>
        <div className="row first-row">
          <input value="AC" type="button" onClick={changeCalculation} />
          <input value="+/-" type="button" onClick={changeCalculation} />
          <input value="%" type="button" onClick={changeCalculation} />
          <input
            value="÷"
            type="button"
            className="color"
            onClick={changeCalculation}
          />
        </div>
        <div className="row second-row">
          <input value="7" type="button" onClick={changeCalculation} />
          <input value="8" type="button" onClick={changeCalculation} />
          <input value="9" type="button" onClick={changeCalculation} />
          <input
            value="x"
            type="button"
            className="color"
            onClick={changeCalculation}
          />
        </div>
        <div className="row third-row">
          <input value="4" type="button" onClick={changeCalculation} />
          <input value="5" type="button" onClick={changeCalculation} />
          <input value="6" type="button" onClick={changeCalculation} />
          <input
            value="-"
            type="button"
            className="color"
            onClick={changeCalculation}
          />
        </div>
        <div className="row fourth-row">
          <input value="1" type="button" onClick={changeCalculation} />
          <input value="2" type="button" onClick={changeCalculation} />
          <input value="3" type="button" onClick={changeCalculation} />
          <input
            value="+"
            type="button"
            className="color"
            onClick={changeCalculation}
          />
        </div>
        <div className="row fifth-row">
          <input
            value="0"
            type="button"
            className="expand"
            onClick={changeCalculation}
          />
          <input value="." type="button" onClick={changeCalculation} />
          <input
            value="="
            type="button"
            className="color"
            onClick={changeCalculation}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
