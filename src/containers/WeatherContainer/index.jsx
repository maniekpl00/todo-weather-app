/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as weatherActions from '../../store/actions/weatherActions';
import WeatherWrapper from '../../components/Weather/WeatherWrapper';
import WeatherWidget from '../../components/Weather/WeatherWidget';
import Spinner from '../../components/UI/Spinner';
import { HOUR_FORMAT, SKY_GRADIENT } from './constants';
import DateHandler from '../DateHandler';

class WeatherContainer extends Component {
  state = {
    skyGradient: SKY_GRADIENT[moment().format(HOUR_FORMAT)],
  };

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(this.fetchWeather);
  };

  fetchWeather = async position => {
    const { latitude, longitude } = position.coords;
    await this.props.fetchWeather(latitude, longitude);
  };

  skyUpdate = hour => {
    this.setState({
      skyGradient: SKY_GRADIENT[hour],
    });
  };

  render() {
    const { skyGradient } = this.state;
    const { weather, loading } = this.props;

    return (
      <WeatherWrapper skyGradient={skyGradient}>
        <DateHandler skyUpdated={this.skyUpdate} />
        {loading ? <Spinner /> : weather && <WeatherWidget data={weather} />}
      </WeatherWrapper>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weatherData.weather,
  loading: state.weatherData.loading,
});

const mapDispatchToProps = {
  fetchWeather: weatherActions.fetchWeather,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherContainer);
