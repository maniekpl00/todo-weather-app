import styled from 'styled-components';

export const StyledTaskWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.taskBackgroundColor};
`