import React from 'react';
import { StyledCurrentDate, DateTitle } from './index.styles';

const CurrentDate = ({ date }) => (
  <StyledCurrentDate>
    <DateTitle>{date}</DateTitle>
  </StyledCurrentDate>
);

export default CurrentDate;
