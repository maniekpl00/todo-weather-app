import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledWeatherWidget = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  font-size: 0.8em;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    flex-direction: column;
    font-size: 1em;
  }
`;

export const LeftContainer = styled.section`
  flex-basis: 40%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    flex-basis: 50%;
    margin-right: 0;
    align-items: center;
    order: 1;
  }
`;

export const RightContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WeatherIcon = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: scale(1.2);
  }

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    img {
      transform: scale(1.5);
    }
  }
`;

export const TemperatureOfLocation = styled.span`
  display: flex;
  font-weight: bold;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    font-size: 1.2em;
  }
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
