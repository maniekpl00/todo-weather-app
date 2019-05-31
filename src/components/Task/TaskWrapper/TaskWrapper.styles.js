import styled from 'styled-components';

export const StyledTaskWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.taskBackgroundColor};
`