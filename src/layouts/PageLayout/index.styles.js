import styled from 'styled-components';
import mediaQueries from '../../styles/mediaQueries';
import constants from '../../styles/constants';

export const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: ${constants.appMinWidth};
  min-height: ${constants.appMinHeight};
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
