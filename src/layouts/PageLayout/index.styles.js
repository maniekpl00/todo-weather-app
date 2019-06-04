import styled from 'styled-components';
import mediaQueries from '../../styles/mediaQueries';

export const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${props => props.theme.color};
  overflow: hidden;
`;

export const ChildrenContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    flex-direction: row;
  }
`;
