import React, { Component } from 'react';
import moment from 'moment';
import { DATE_FORMAT, TIME_FORMAT, INTERVAL_TIME } from './constants';
import DateLabel from '../../components/Date/DateLabel';
import TimeLabel from '../../components/Date/TimeLabel';
import DateWrapper from '../../components/Date/DateWrapper';

class DateHandler extends Component {
  state = {
    date: moment().format(DATE_FORMAT),
    time: moment().format(TIME_FORMAT),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const _moment = moment();
      this.setState({
        time: _moment.format(TIME_FORMAT),
        date: _moment.format(DATE_FORMAT),
      });
    }, INTERVAL_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { date, time } = this.state;
    return (
      <DateWrapper>
        <DateLabel date={date} />
        <TimeLabel time={time} />
      </DateWrapper>
    );
  }
}

export default DateHandler;
