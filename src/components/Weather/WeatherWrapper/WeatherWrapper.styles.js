import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import constants from '../../../styles/constants';

export const StyledWeatherWrapper = styled.section`
  position: relative;
  height: 30vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-image: linear-gradient(black, ${props => props.theme.primaryColor});
  color: white;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    padding: 80px 20px;
    height: auto;
    width: ${constants.weatherWidth};
    font-size: 1.2rem;
  }
`;
