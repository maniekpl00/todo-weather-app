import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://api.openweathermap.org/data/2.5',
});

const data = {
	coord: {
		lon: 19.02,
		lat: 50.26,
	},
	weather: [
		{
			id: 800,
			main: 'Clear',
			description: 'clear sky',
			icon: '01n',
		},
	],
	base: 'stations',
	main: {
		temp: 14.92,
		pressure: 1023,
		humidity: 71,
		temp_min: 12.78,
		temp_max: 17.22,
	},
	visibility: 10000,
	wind: {
		speed: 0.5,
	},
	clouds: {
		all: 0,
	},
	dt: 1559334959,
	sys: {
		type: 1,
		id: 1705,
		message: 0.0065,
		country: 'PL',
		sunrise: 1559270389,
		sunset: 1559328217,
	},
	timezone: 7200,
	id: 3096472,
	name: 'Katowice',
	cod: 200,
};

function mock() {
	return {
		status: 200,
		data,
	};
}

export default {
	fetchWeather(city) {
		const params = {
			q: city,
			units: 'metric',
			APPID: process.env.REACT_APP_APPID,
		};
		return instance.get(`/weather`, { params });
	},

	fetchMockWeather(city) {
		const apiData = mock();
		return new Promise(resolve => setTimeout(() => resolve(apiData), 500));
	},
};
