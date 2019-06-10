import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledDateLabel = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2em;

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    font-size: 1.4em;
    letter-spacing: 4px;
  }
`;
