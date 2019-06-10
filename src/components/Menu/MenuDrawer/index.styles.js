import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledMenuDrawer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${mediaQueries.mobileMaxWidth}) {
    font-size: 1.1em;
  }
`;
