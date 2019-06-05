import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledCurrentDate = styled.div`
  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    text-align: center;
  }
`;

export const DateTitle = styled.span`
  letter-spacing: 4px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.35em;
  color: white;
`;
