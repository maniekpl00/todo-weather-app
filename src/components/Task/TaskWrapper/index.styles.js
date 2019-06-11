import styled from 'styled-components';
import constants from '../../../styles/constants';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledTaskWrapper = styled.section`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.taskBackgroundColor};

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    max-width: calc(100% - ${constants.weatherWidth});
  }
`;
