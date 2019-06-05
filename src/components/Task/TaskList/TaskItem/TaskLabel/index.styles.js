import styled from 'styled-components';

export const StyledTaskLabel = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  display: block;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskNameSpan = styled(Span)`
  text-decoration: ${props => (props.finished ? 'line-through' : 'none')};
`;

export const TaskBottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TaskTagSpan = styled(Span)`
  text-transform: capitalize;
  font-size: 0.8em;
`;

export const TaskTermWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: flex-end;
  color: ${props => (props.alerted ? 'red' : 'inherit')};

  && {
    svg {
      width: 0.7em;
      height: 0.7em;
      color: inherit;
    }
  }
`;

export const TaskTermSpan = styled(Span)`
  margin-left: 5px;
  font-size: 0.8rem;
  color: inherit;
`;
