import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledWeatherWidget = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.section`
  flex-basis: 50%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    margin-right: 0;
    align-items: center;
  }
`;

export const RightContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    width: 100px;
    height: 100px;
  }
`;

export const TemperatureOfLocation = styled.span`
  font-weight: bold;
  font-size: 1.2em;
`;

export const Description = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const LastUpdateTime = styled.div``;

export const Pressure = styled.span``;

export const WindSpeed = styled.span``;

export const Humadity = styled.span``;
