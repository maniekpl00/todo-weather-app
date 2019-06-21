import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import constants from '../../../styles/constants';

export const StyledMenuWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  pointer-events: none;

  & * {
    pointer-events: all;
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    width: ${constants.weatherWidth};
  }

  @media (min-width: ${mediaQueries.desktopLargeMaxWidth}) {
    position: relative;
    box-shadow: -1px 0 3px rgba(0, 0, 0, 0.2);
  }
`;
