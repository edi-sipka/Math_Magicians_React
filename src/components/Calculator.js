/* eslint-disable */
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  changeCalculation = (event) => {
    const result = event.target.value;
    const calculation = calculate(this.state, result);
    this.setState(calculation);
  };

  displayResult = (event) => {
    this.setState({ total: event.target.value });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main">
        <div className="calculator">
          <div className="screen" onChange={this.displayResult}>
            {total} {operation} {next}
          </div>
          <div className="row first-row">
            <input value="AC" type="button" onClick={this.changeCalculation} />
            <input value="+/-" type="button" onClick={this.changeCalculation} />
            <input value="%" type="button" onClick={this.changeCalculation} />
            <input
              value="÷"
              type="button"
              className="color"
              onClick={this.changeCalculation}
            />
          </div>
          <div className="row second-row">
            <input value="7" type="button" onClick={this.changeCalculation} />
            <input value="8" type="button" onClick={this.changeCalculation} />
            <input value="9" type="button" onClick={this.changeCalculation} />
            <input
              value="x"
              type="button"
              className="color"
              onClick={this.changeCalculation}
            />
          </div>
          <div className="row third-row">
            <input value="4" type="button" onClick={this.changeCalculation} />
            <input value="5" type="button" onClick={this.changeCalculation} />
            <input value="6" type="button" onClick={this.changeCalculation} />
            <input
              value="-"
              type="button"
              className="color"
              onClick={this.changeCalculation}
            />
          </div>
          <div className="row fourth-row">
            <input value="1" type="button" onClick={this.changeCalculation} />
            <input value="2" type="button" onClick={this.changeCalculation} />
            <input value="3" type="button" onClick={this.changeCalculation} />
            <input
              value="+"
              type="button"
              className="color"
              onClick={this.changeCalculation}
            />
          </div>
          <div className="row fifth-row">
            <input
              value="0"
              type="button"
              className="expand"
              onClick={this.changeCalculation}
            />
            <input value="." type="button" onClick={this.changeCalculation} />
            <input
              value="="
              type="button"
              className="color"
              onClick={this.changeCalculation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
