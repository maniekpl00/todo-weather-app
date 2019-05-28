import React from 'react';
import { StyledTaskAddForm, TaskInput, DateInput, TaskSubmitButton } from './TaskAddForm.styles';

const TaskAddForm = ({ task, textChanged, dateChanged, submitted }) => (
  <StyledTaskAddForm onSubmit={submitted}>
    <TaskInput type="text" name="name" placeholder="Task name" value={task.name} onChange={textChanged} />
    <TaskInput type="text" name="tag" placeholder="Tag" value={task.tag} onChange={textChanged} />
    <DateInput label="Term" value={task.term} onChange={dateChanged} />
    <TaskSubmitButton type="submit">Submit task</TaskSubmitButton>
  </StyledTaskAddForm>
);

export default TaskAddForm;
