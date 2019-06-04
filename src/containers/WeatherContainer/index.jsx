/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import moment from 'moment';
import WeatherWrapper from '../../components/Weather/WeatherWrapper';
import weatherApi from '../../api/weatherApi';
import CurrentDate from '../../components/Weather/CurrentDate';
import WeatherWidget from '../../components/Weather/WeatherWidget';
import Spinner from '../../components/UI/Spinner';

class WeatherContainer extends Component {
  state = {
    weather: null,
    loading: false,
  };

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = () => {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition(this.fetchWeather, this.handleError);
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

  handleError = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { weather, loading } = this.state;
    const currentDate = moment().format('dddd, DD MMM');
    console.log(weather);

    return (
      <WeatherWrapper>
        <CurrentDate date={currentDate} />
        {loading ? <Spinner /> : weather && <WeatherWidget data={weather} />}
      </WeatherWrapper>
    );
  }
}

export default WeatherContainer;
