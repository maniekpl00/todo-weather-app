/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import moment from 'moment';
import WeatherWrapper from '../../components/Weather/WeatherWrapper';
import weatherApi from '../../api/weatherApi';
import WeatherWidget from '../../components/Weather/WeatherWidget';
import Spinner from '../../components/UI/Spinner';
import { HOUR_FORMAT } from './constants';
import DateHandler from '../DateHandler';

class WeatherContainer extends Component {
  state = {
    weather: null,
    loading: false,
    skyId: moment().format(HOUR_FORMAT),
  };

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = () => {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition(this.fetchWeather, this.errorHandler);
  };

  fetchWeather = async position => {
    const { latitude, longitude } = position.coords;
    try {
      // const response = await weatherApi.fetchWeather(latitude, longitude);
      const response = await weatherApi.fetchMockWeather(latitude, longitude);
      this.setState({ weather: response.data, loading: false });
    } catch (err) {
      this.setState({ loading: false });
    }
  };

  errorHandler = () => {
    this.setState({
      loading: false,
    });
  };

  updateSkyTime = skyId => {
    this.setState({
      skyId,
    });
  };

  render() {
    const { weather, loading, skyId } = this.state;
    console.log(weather);
    console.log(skyId);

    return (
      <WeatherWrapper skyId={skyId}>
        <DateHandler />
        {loading ? <Spinner /> : weather && <WeatherWidget data={weather} />}
      </WeatherWrapper>
    );
  }
}

export default WeatherContainer;
