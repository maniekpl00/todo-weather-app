import * as actionTypes from './actionTypes';
import weatherApi from '../../api/weatherApi';

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

function fetchWeatherStart() {
  return {
    type: actionTypes.FETCH_WEATHER_START,
  };
}

export function fetchWeather(latitude, longitude) {
  return async dispatch => {
    dispatch(fetchWeatherStart());
    
    try {
      const response = await weatherApi.fetchMockWeather(latitude, longitude);
      dispatch(fetchWeatherSuccess(response.data));
    } catch (err) {
      dispatch(fetchWeatherFailed());
    }
  };
}
