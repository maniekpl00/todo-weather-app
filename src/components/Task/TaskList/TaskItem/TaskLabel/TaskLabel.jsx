import React from 'react';
import { StyledTaskLabel, TaskNameSpan, TaskTagSpan } from './TaskLabel.styles';

const TaskLabel = ({ name, tag, finished }) => (
  <StyledTaskLabel>
    <TaskNameSpan finished={finished}>{name}</TaskNameSpan>
    <TaskTagSpan>{tag}</TaskTagSpan>
  </StyledTaskLabel>
);

export default TaskLabel;
