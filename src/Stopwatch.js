import React, { Component } from 'react'
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      interval: null
    }
  }

  startTimer() {
    if (!this.state.interval) {
      this.setState({ interval: setInterval(() => {
        this.setState({
          counter: this.state.counter + 1
        })
      }, 1000)})
    }
  }

  pauseTimer() {
    clearInterval(this.state.interval)
    this.setState({
      interval: null
    })
  }

  resetTimer() {
    this.setState({
      counter: 0
    })
  }

  render() {
    var zero = ''
    var display = ''
    if (this.state.counter === 0) {
      zero = "red"
      display = 'none'
    }
    return (
      <div className="stopwatch">
        <h1 style={{color: zero}}>{this.state.counter}</h1>
        <div className="controls">
          <button style={{display: display}} onClick={() => this.resetTimer()}>Reset</button>
          <button onClick={() => this.startTimer()}>Start</button>
          <button style={{display: display}} onClick={() => this.pauseTimer()}>Pause</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
