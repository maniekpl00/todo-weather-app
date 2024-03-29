import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

// Settings for scoped tag
const Span = styled.span`
  padding: 5px 0;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledWeatherWidget = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  font-size: 0.8em;

  @media (min-width: ${mediaQueries.ipadMaxWidth}) {
    font-size: 0.9em;
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.section`
  flex-basis: 45%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${mediaQueries.mobileMaxWidth}), (orientation: landscape) {
    align-items: center;
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    flex-basis: 50%;
    margin-right: 0;
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

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    img {
      transform: scale(1.5);
    }
  }
`;

export const TemperatureOfLocation = styled(Span)`
  display: flex;
  font-weight: bold;
`;

export const Description = styled(Span)`
  &::first-letter {
    text-transform: uppercase;
  }

  @media (min-width: ${mediaQueries.mobileMaxWidth}), (orientation: landscape) {
    text-align: center;
  }
`;

export const LastUpdateTime = styled(Span)`
  @media (min-width: ${mediaQueries.mobileMaxWidth}), (orientation: landscape) {
    text-align: center;
  }
`;

export const Pressure = styled(Span)``;

export const WindSpeed = styled(Span)``;

export const Humadity = styled(Span)``;
