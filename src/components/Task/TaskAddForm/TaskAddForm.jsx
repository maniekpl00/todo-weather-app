import React from 'react';
import { StyledTaskAddForm } from './TaskAddForm.styles';

const TaskAddForm = ({ task, changed, submitted }) => (
  <StyledTaskAddForm onSubmit={submitted}>
    <input type="text" name="name" value={task.name} onChange={changed} />
    <input type="text" name="tag" value={task.tag} onChange={changed} />
    <button type="submit">Add</button>
  </StyledTaskAddForm>
);

export default TaskAddForm;
