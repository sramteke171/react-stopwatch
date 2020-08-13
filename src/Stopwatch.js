import React, { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      valid: false,
    };
    this.setCounter = null;
  }

  //handleStart method that calls setInterval() and updates counter every second.
  //(Make sure to use setState to update)

  handleStart = () => {
    this.setCounter = setInterval(this.startCounter, 1000);
  };

  startCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });
    clearInterval(this.setCounter);
  };

  handlePause = () => {
    clearInterval(this.setCounter);
  };

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
