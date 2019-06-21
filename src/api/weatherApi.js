import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URI,
});

export default {
  fetchWeather(latitude, longitude) {
    const params = {
      lat: latitude,
      lon: longitude,
      units: 'metric',
    };
    return instance.get(`/weather`, { params });
  },
};
