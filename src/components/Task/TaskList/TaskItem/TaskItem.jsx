import React from 'react';
import { StyledTaskItem } from './TaskItem.styles';

const TaskItem = ({item}) => {
  return (
    <StyledTaskItem>
      {item.name} 
    </StyledTaskItem>
  )
};

export default TaskItem;
