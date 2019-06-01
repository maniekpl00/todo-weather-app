/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import moment from 'moment';
import WeatherWrapper from '../../components/Weather/WeatherWrapper/WeatherWrapper';
import weatherApi from '../../api/weatherApi';
import CurrentDate from '../../components/Weather/CurrentDate/CurrentDate';
import WeatherWidget from '../../components/Weather/WeatherWidget/WeatherWidget';
import Spinner from '../../components/UI/Spinner/Spinner';

class WeatherContainer extends Component {
	state = {
		currentDate: moment().format('dddd, DD MMM'),
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

	fetchWeather = async ({ latitude, longitude }) => {
		try {
			// const response = await weatherApi.fetchWeather(latitude, longitude);
			const response = await weatherApi.fetchMockWeather(latitude, longitude);
			console.log(response.data);
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
		const { currentDate, weather, loading } = this.state;
		return (
			<WeatherWrapper>
				<CurrentDate date={currentDate} />
				{loading ? <Spinner /> : weather && <WeatherWidget data={weather} />}
			</WeatherWrapper>
		);
	}
}

export default WeatherContainer;
