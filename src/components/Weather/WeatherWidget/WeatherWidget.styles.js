import styled from 'styled-components';

export const StyledWeatherWidget = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;

export const WeatherTopContainer = styled.section`
  height: 33%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const WeatherIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const WeatherTemperature = styled.span``;

export const WeatherCenterContainer = styled.div`
  height: 33%;
  text-transform: capitalize;
  display: flex;
	justify-content: center;
  align-items: center;
	padding: 10px 0;
`;

export const WeatherBottomContainer = styled.section`
  height: 33%;
	display: flex;
	justify-content: space-around;
  align-items: center;
	padding: 10px 0;
`;

export const WeatherPressure = styled.span`
`;

export const WeatherWindSpeed = styled.span`
`;
