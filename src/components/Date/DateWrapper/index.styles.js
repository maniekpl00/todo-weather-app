import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledDateWrapper = styled.div`
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    text-align: center;
  }
`;
