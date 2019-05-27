import styled from 'styled-components';

export const StyledTask = styled.section`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${props => props.theme.taskBackgroundColor};
`