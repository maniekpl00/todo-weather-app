import React from 'react';
import { StyledTaskAddButton, AddButton, AddParagraph } from './TaskAddButton.styles';

const TaskAddButton = props => (
  <StyledTaskAddButton>
    <AddButton onClick={props.clicked}>+</AddButton>
    <AddParagraph>Add a to-do</AddParagraph>
  </StyledTaskAddButton>
);

export default TaskAddButton;
