import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URI,
});

const data = {
  coord: {
    lon: 19.98,
    lat: 50.08,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 25.64,
    pressure: 1012,
    humidity: 60,
    temp_min: 24,
    temp_max: 28.33,
  },
  visibility: 10000,
  wind: {
    speed: 5.7,
    deg: 60,
  },
  clouds: {
    all: 75,
  },
  dt: 1559732239,
  sys: {
    type: 1,
    id: 1701,
    message: 0.0054,
    country: 'PL',
    sunrise: 1559702005,
    sunset: 1559760234,
  },
  timezone: 7200,
  id: 3088150,
  name: 'Prądnik Czerwony',
  cod: 200,
};

function mock() {
  return {
    status: 200,
    data,
  };
}

export default {
  fetchWeather(latitude, longitude) {
    const params = {
      lat: latitude,
      lon: longitude,
      units: 'metric',
    };
    return instance.get(`/weather`, { params });
  },

  fetchMockWeather(latitude, longitude) {
    const apiData = mock();
    return new Promise(resolve => setTimeout(() => resolve(apiData), 100));
  },
};
