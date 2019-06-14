import * as actionTypes from './actionTypes';
import weatherApi from '../../api/weatherApi';
import weatherService from '../../services/weatherService';

function fetchWeatherStart() {
  return {
    type: actionTypes.FETCH_WEATHER_START,
  };
}

function fetchWeatherSuccess(weather) {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    weather,
  };
}

function fetchWeatherFailed() {
  return {
    type: actionTypes.FETCH_WEATHER_FAILED,
  };
}

export function fetchWeather(latitude, longitude) {
  return async dispatch => {
    const weather = weatherService.getWeather();
    let shouldFetch = true;

    if (weather) {
      const lastUpdatedDate = new Date(weather.dt * 1000);
      const differenceMinutes = (new Date().getTime() - lastUpdatedDate.getTime()) / (1000 * 60);
      const { lon, lat } = weather.coord;
      if (differenceMinutes < 60 && lat == latitude && lon == longitude) {
        shouldFetch = false;
      }
    }

    if (shouldFetch) {
      dispatch(fetchWeatherStart());
      try {
        const response = await weatherApi.fetchWeather(latitude, longitude);
        dispatch(fetchWeatherSuccess(response.data));
      } catch (err) {
        dispatch(fetchWeatherFailed());
      }
    } else {
      dispatch(fetchWeatherSuccess(weather));
    }
  };
}
