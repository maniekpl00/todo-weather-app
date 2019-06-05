import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledTaskList = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 80%;
  font-size: 0.9em;
  color: ${props => props.theme.taskColor};

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    font-size: 1em;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  overflow-y: auto;
`;
