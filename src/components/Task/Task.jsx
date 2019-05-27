import React from 'react';
import { StyledTask } from './Task.styles';
import TaskAddFormHandler from '../../containers/TaskAddFormHandler/TaskAddFormHandler';
import TaskList from './TaskList/TaskList';

const Task = ({ tasks }) => {
  return (
    <StyledTask>
      <TaskAddFormHandler />
      <TaskList tasks={tasks} />
    </StyledTask>
  );
};

export default Task;
