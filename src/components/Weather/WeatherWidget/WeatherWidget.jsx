import React from 'react';
import { injectIntl } from 'react-intl';
import {
  StyledWeatherWidget,
  LeftContainer,
  RightContainer,
  WeatherIcon,
  TemperatureOfLocation,
  Description,
  LastUpdateTime,
  Pressure,
  WindSpeed,
  Humadity,
} from './WeatherWidget.styles';
import Clock from '../Clock/Clock';

const WeatherWidget = ({ data, intl }) => {
  const { temp, pressure, humidity } = data.main;
  const { icon, id } = data.weather[0];
  const description = intl.formatMessage({ id: `Weather.WeatherWidget.${id}` });
  const locationName = data.name;
  const windSpeed = (data.wind.speed * 3.6).toFixed(2);
  const iconSrc = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <StyledWeatherWidget>
      <LeftContainer>
        <Clock />
        <Humadity>Humadity: {humidity}%</Humadity>
        <Pressure>Pressure: {pressure} hPa</Pressure>
        <WindSpeed>Wind: {windSpeed} km/h</WindSpeed>
      </LeftContainer>
      <RightContainer>
        <WeatherIcon src={iconSrc} />
        <TemperatureOfLocation>
          {temp.toFixed()}&#8451;, {locationName}
        </TemperatureOfLocation>
        <Description>{description}</Description>
        <LastUpdateTime>Jun 13 11:02</LastUpdateTime>
      </RightContainer>
    </StyledWeatherWidget>
  );
};

export default injectIntl(WeatherWidget);
