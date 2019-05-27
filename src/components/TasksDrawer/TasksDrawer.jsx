import React from 'react';
import uuid from 'uuid';
import {StyledTasksDrawer} from './TasksDrawer.styles';

const TasksDrawer = (props) => (
  <StyledTasksDrawer>
    {props.tasks.map(task => <div key={uuid.v4()}>Task</div>)}
  </StyledTasksDrawer>
);

export default TasksDrawer;
