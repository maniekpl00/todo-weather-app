import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledDateWrapper = styled.div`
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    text-align: center;
  }
`;

export const DateTitle = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2em;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    font-size: 1.4em;
    letter-spacing: 4px;
  }
`;
