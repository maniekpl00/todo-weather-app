import React from 'react';
import uuid from 'uuid';
import { StyledTaskList, List } from './TaskList.styles';
import TaskItem from './TaskItem/TaskItem';

const TaskList = props => {
  const tasks = props.tasks.map(task => <TaskItem key={task.id} item={task} />);

  return (
    <StyledTaskList>
      <List>{tasks}</List>
    </StyledTaskList>
  );
};

export default TaskList;
