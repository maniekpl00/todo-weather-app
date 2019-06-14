const WEATHER_KEY = 'weather_key';

export default {
  saveWeather(weather) {
    localStorage.setItem(WEATHER_KEY, JSON.stringify(weather));
    return weather;
  },

  getWeather() {
    const weather = localStorage.getItem(WEATHER_KEY);
    return weather ? JSON.parse(weather) : null;
  },
};
