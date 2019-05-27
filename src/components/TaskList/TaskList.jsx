import React from 'react';
import uuid from 'uuid';
import {StyledTaskList} from './TaskList.styles';

const TaskList = (props) => (
  <StyledTaskList>
    {props.tasks.map(task => <div key={uuid.v4()}>Task</div>)}
  </StyledTaskList>
);

export default TaskList;
