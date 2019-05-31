import React from 'react';
import {
	StyledWeatherWidget,
	WeatherTopContainer,
	WeatherIcon,
	WeatherTemperature,
	WeatherCenterContainer,
	WeatherBottomContainer,
	WeatherPressure,
	WeatherWindSpeed,
} from './WeatherWidget.styles';

const WeatherWidget = ({ data }) => {
	const { temp, pressure } = data.main;
	const { icon, description } = data.weather[0];
	const windSpeed = data.wind.speed;
	const iconSrc = `http://openweathermap.org/img/w/${icon}.png`;

	return (
		<StyledWeatherWidget>
			<WeatherTopContainer>
				<WeatherIcon src={iconSrc} />
				<WeatherTemperature>{temp.toFixed()} &#8451;</WeatherTemperature>
			</WeatherTopContainer>
			<WeatherCenterContainer>{description}</WeatherCenterContainer>
			<WeatherBottomContainer>
				<WeatherPressure>{pressure} hPa</WeatherPressure>
				<WeatherWindSpeed>{windSpeed} meter/sec</WeatherWindSpeed>
			</WeatherBottomContainer>
		</StyledWeatherWidget>
	);
};

export default WeatherWidget;
