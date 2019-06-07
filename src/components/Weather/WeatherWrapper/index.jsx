import React from 'react';
import { StyledWeatherWrapper } from './index.styles';

const WeatherWrapper = ({ skyGradient, children }) => {
  return <StyledWeatherWrapper skyGradient={skyGradient}>{children}</StyledWeatherWrapper>;
};

export default WeatherWrapper;
