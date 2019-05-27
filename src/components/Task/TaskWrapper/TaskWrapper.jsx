import React from 'react';
import { StyledTaskWrapper } from './TaskWrapper.styles';

const TaskWrapper = ({ children }) => {
  return <StyledTaskWrapper>{children}</StyledTaskWrapper>;
};

export default TaskWrapper;
