import styled from 'styled-components';

export const StyledTaskLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TaskNameSpan = styled.span`
  text-decoration: ${props => (props.finished ? 'line-through' : 'none')};
  text-transform: capitalize;
  font-size: 1rem;
`;

export const TaskTagSpan = styled.span`
  text-transform: capitalize;
  font-size: 0.8rem;
`;
