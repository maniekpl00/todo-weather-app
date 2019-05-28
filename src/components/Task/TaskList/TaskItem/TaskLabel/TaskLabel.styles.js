import styled from 'styled-components';

export const StyledTaskLabel = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskNameSpan = styled(Span)`
  text-decoration: ${props => (props.finished ? 'line-through' : 'none')};
  font-size: 1rem;
`;

export const TaskTagSpan = styled(Span)`
  text-transform: capitalize;
  font-size: 0.8rem;
`;
