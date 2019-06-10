import React, { Component } from 'react';
import moment from 'moment';
import { DATE_FORMAT, TIME_FORMAT, INTERVAL_TIME, HOUR_FORMAT, SECOND_FORMAT } from './constants';
import DateLabel from '../../components/Date/DateLabel';
import TimeLabel from '../../components/Date/TimeLabel';
import DateWrapper from '../../components/Date/DateWrapper';

class DateHandler extends Component {
  state = {
    dateTime: moment(),
  };

  componentDidMount() {
    const timeoutTime = (60 - moment().format(SECOND_FORMAT)) * 1000;
    setTimeout(() => {
      this.updateDateAndSky();
      this.intervalId = setInterval(() => this.updateDateAndSky(), INTERVAL_TIME);
    }, timeoutTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateDateAndSky = () => {
    const _moment = moment();
    this.setState({
      dateTime: _moment,
    });
    this.props.skyUpdated(_moment.format(HOUR_FORMAT));
  };

  render() {
    const { dateTime } = this.state;
    const date = dateTime.format(DATE_FORMAT);
    const time = dateTime.format(TIME_FORMAT);

    return (
      <DateWrapper>
        <DateLabel date={date} />
        <TimeLabel time={time} />
      </DateWrapper>
    );
  }
}

export default DateHandler;
