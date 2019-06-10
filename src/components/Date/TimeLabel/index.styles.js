import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledTimeLabel = styled.div`
  font-weight: bold;
  font-size: 1.5em;

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    letter-spacing: 4px;
    font-size: 2em;
  }
`;
