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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  background: ${props => props.skyGradient};

  /* overlay to darken weather background */
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 25%);
    z-index: 0;
  }

  @media (min-width: ${mediaQueries.mobileMaxWidth}) {
    padding: 20px 25px;
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    padding: 80px 20px;
    height: auto;
    width: ${constants.weatherWidth};
  }
`;
