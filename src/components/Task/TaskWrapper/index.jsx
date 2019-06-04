import React from 'react';
import { StyledTaskWrapper } from './index.styles';

const TaskWrapper = ({ children }) => {
  return <StyledTaskWrapper>{children}</StyledTaskWrapper>;
};

export default TaskWrapper;
