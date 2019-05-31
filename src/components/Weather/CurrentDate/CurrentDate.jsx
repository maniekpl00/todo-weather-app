import React from 'react';
import { StyledCurrentDate, DateTitle } from './CurrentDate.styles';

const CurrentDate = ({ date }) => (
	<StyledCurrentDate>
		<DateTitle>{date}</DateTitle>
	</StyledCurrentDate>
);

export default CurrentDate;
