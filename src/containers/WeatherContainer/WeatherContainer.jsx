import React, { Component } from 'react';
import moment from 'moment';
import WeatherWrapper from '../../components/Weather/WeatherWrapper/WeatherWrapper';
import weatherApi from '../../api/weatherApi';
import CurrentDate from '../../components/Weather/CurrentDate/CurrentDate';
import WeatherWidget from '../../components/Weather/WeatherWidget/WeatherWidget';

class WeatherContainer extends Component {
	state = {
		currentDate: moment().format('dddd, DD MMM'),
		weather: null,
	};

	componentDidMount() {
		this.fetchWeather();
	}

	fetchWeather = async () => {
		try {
			const response = await weatherApi.fetchMockWeather('Katowice');
			this.setState({ weather: response.data });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { currentDate, weather } = this.state;
		return (
			<WeatherWrapper>
				<CurrentDate date={currentDate} />
				{weather && <WeatherWidget data={weather} />}
			</WeatherWrapper>
		);
	}
}

export default WeatherContainer;
