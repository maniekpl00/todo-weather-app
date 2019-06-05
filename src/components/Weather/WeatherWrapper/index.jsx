import React from 'react';
import { StyledWeatherWrapper } from './index.styles';

const WeatherWrapper = ({ children }) => {
  return <StyledWeatherWrapper>{children}</StyledWeatherWrapper>;
};

export default WeatherWrapper;
