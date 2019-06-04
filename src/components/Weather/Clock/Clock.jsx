import React, { Component } from 'react';
import moment from 'moment';
import { intervalTime, DATE_FORMAT } from './constants';
import { StyledClock } from './Clock.styles';

class Clock extends Component {
  state = {
    time: moment().format(DATE_FORMAT),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: moment().format(DATE_FORMAT),
      });
    }, intervalTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;

    return <StyledClock>{time}</StyledClock>;
  }
}

export default Clock;
