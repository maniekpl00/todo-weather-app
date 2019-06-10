import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import constants from '../../../styles/constants';

export const StyledWeatherWrapper = styled.section`
  position: relative;
  height: 35vh;
  min-height: ${constants.weatherMinHeight};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  background: ${props => props.skyGradient};

  @media (min-width: ${mediaQueries.mobileMaxWidth}) {
    padding: 20px 25px;
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    padding: 80px 20px;
    height: auto;
    width: ${constants.weatherWidth};
  }
`;
