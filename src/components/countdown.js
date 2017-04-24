import {DateBetween} from './DateBetween'
import React, { Component, PropTypes } from 'react'
import './countdown.css';

export default class Countdown extends Component {

  constructor (props) {
    super(props)
    this.state = { remaining: null }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    let startDate = new Date()
    let endDate = this.props.options.endDate
    let remaining = DateBetween(startDate, endDate)
    this.setState({remaining: remaining })
  }

  render() {
      if(this.state.remaining ==null){
        return null;
      }
    return (
      <div className="react-count-down" style={{marginLeft:'-2rem', minWidth:'430px',marginTop: '20px', marginBottom: 10}}>
          <ul className="countdown">   
            <li>
                <span className="numbers">{this.state.remaining.days}</span>
                <p className="description">Days</p>
            </li>
            <li>
                <span className="numbers">{this.state.remaining.hours}</span>
                <p className="description">Hours</p>
            </li>
            <li>
                <span className="numbers">{this.state.remaining.minutes}</span>
                <p className="description">Minutes</p>
            </li>
            <li>
                <span className="numbers">{this.state.remaining.seconds}</span>
                <p className="description">Seconds</p>
            </li>
          </ul>
      </div>
    )
  };
}
