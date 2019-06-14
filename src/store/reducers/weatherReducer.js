import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function weatherReducer(state = initialState.weatherData, action) {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        loading: false,
      };

    case actionTypes.FETCH_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
