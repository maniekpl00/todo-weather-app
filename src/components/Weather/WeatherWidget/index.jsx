import React from 'react';
import { injectIntl } from 'react-intl';
import moment from 'moment';
import messages from './messages';
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
} from './index.styles';

const WeatherWidget = ({ data, intl }) => {
  const { temp, pressure, humidity } = data.main;
  const { icon, id } = data.weather[0];
  const description = intl.formatMessage({ id: `Weather.WeatherWidget.${id}` });
  const locationName = data.name;
  const windSpeed = (data.wind.speed * 3.6).toFixed(2);
  const iconSrc = `http://openweathermap.org/img/w/${icon}.png`;
  const lastUpdateTime = moment(data.dt * 1000)
    .startOf('hour')
    .fromNow();

  return (
    <StyledWeatherWidget>
      <LeftContainer>
        <Humadity>
          {intl.formatMessage({ ...messages.humadity })}: {humidity}%
        </Humadity>
        <Pressure>
          {intl.formatMessage({ ...messages.pressure })}: {pressure} hPa
        </Pressure>
        <WindSpeed>
          {intl.formatMessage({ ...messages.wind })}: {windSpeed} km/h
        </WindSpeed>
        <LastUpdateTime>
          {intl.formatMessage({ ...messages.updatedTime })}: {lastUpdateTime}
        </LastUpdateTime>
      </LeftContainer>
      <RightContainer>
        <WeatherIcon>
          <img src={iconSrc} alt="" />
        </WeatherIcon>
        <TemperatureOfLocation>
          {temp.toFixed()}&#8451;, {locationName}
        </TemperatureOfLocation>
        <Description>{description}</Description>
      </RightContainer>
    </StyledWeatherWidget>
  );
};

export default injectIntl(WeatherWidget);
