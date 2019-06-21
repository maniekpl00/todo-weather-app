import React from 'react';
import { CalendarToday as TermIcon } from '@material-ui/icons';
import {
  StyledTaskLabel,
  TaskNameSpan,
  TaskBottomWrapper,
  TaskTagSpan,
  TaskTermWrapper,
  TaskTermSpan,
} from './index.styles';

const TaskLabel = ({ name, tag, finished, term, termAlerted }) => (
  <StyledTaskLabel>
    <TaskNameSpan finished={finished}>{name}</TaskNameSpan>
    <TaskBottomWrapper>
      <TaskTagSpan>{tag}</TaskTagSpan>
      <TaskTermWrapper alerted={termAlerted}>
        <TermIcon />
        <TaskTermSpan>{term}</TaskTermSpan>
      </TaskTermWrapper>
    </TaskBottomWrapper>
  </StyledTaskLabel>
);

export default TaskLabel;
