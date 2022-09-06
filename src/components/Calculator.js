/* eslint-disable */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="calculator">
          <div className="screen">
            <input type="text" value="0" className="silver" />
          </div>
          <div className="row first-row">
            <input value="AC" type="button" />
            <input value="+/-" type="button" />
            <input value="%" type="button" />
            <input value="/" type="button" className="color" />
          </div>
          <div className="row second-row">
            <input value="7" type="button" />
            <input value="8" type="button" />
            <input value="9" type="button" />
            <input value="X" type="button" className="color" />
          </div>
          <div className="row third-row">
            <input value="4" type="button" />
            <input value="5" type="button" />
            <input value="6" type="button" />
            <input value="-" type="button" className="color" />
          </div>
          <div className="row fourth-row">
            <input value="1" type="button" />
            <input value="2" type="button" />
            <input value="3" type="button" />
            <input value="+" type="button" className="color" />
          </div>
          <div className="row fifth-row">
            <input value="0" type="button" className="expand" />
            <input value="." type="button" />
            <input value="=" type="button" className="color" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
