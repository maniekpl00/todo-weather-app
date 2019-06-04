import React from 'react';
import { StyledSelector, FormControl, Select, MenuItem, FormHelperText } from './Selector.styles';

const Selector = ({ open, value, options, label, ...props }) => (
	<StyledSelector>
		<FormControl>
			<Select
				open={open}
				onClose={props.closed}
				onOpen={props.opened}
				renderValue={name => name.title}
				value={value}
				onChange={props.changed}
			>
				{options.map(option => (
					<MenuItem key={option.id} value={option}>
						{option.title}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>{label}</FormHelperText>
		</FormControl>
	</StyledSelector>
);

export default Selector;
