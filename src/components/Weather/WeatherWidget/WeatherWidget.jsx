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
	const locationName = data.name;
	const windSpeed = data.wind.speed * 3.6;
  const iconSrc = `http://openweathermap.org/img/w/${icon}.png`;

	return (
		<StyledWeatherWidget>
			<WeatherTopContainer>
				<WeatherIcon src={iconSrc} />
				<WeatherTemperature>
					{temp.toFixed()} &#8451;, {locationName}
				</WeatherTemperature>
			</WeatherTopContainer>
			<WeatherCenterContainer>{description}</WeatherCenterContainer>
			<WeatherBottomContainer>
				<WeatherPressure>{pressure} hPa</WeatherPressure>
				<WeatherWindSpeed>{windSpeed} km/h</WeatherWindSpeed>
			</WeatherBottomContainer>
		</StyledWeatherWidget>
	);
};

export default WeatherWidget;
