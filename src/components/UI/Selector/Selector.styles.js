import styled from 'styled-components';
import {
	Select as _Select,
	MenuItem as _MenuItem,
	FormControl as _FormControl,
	FormHelperText as _FormHelperText,
} from '@material-ui/core';

export const StyledSelector = styled.div`
	width: 70%;
	padding: 20px 0;
`;

export const FormControl = styled(_FormControl)`
	&& {
		width: 100%;
		color: ${props => props.theme.primaryColor};

		div {
			color: inherit;

			&::before,
			&::after {
				border-color: inherit;
			}
		}
	}
`;

export const Select = styled(_Select)`
	&& {
		font-size: 1.2rem;
	}
`;

export const MenuItem = styled(_MenuItem)`
	&& {
		width: 100%;
	}
`;

export const FormHelperText = styled(_FormHelperText)`
	&& {
		color: ${props => props.theme.primaryColor};
		width: 100%;
	}
`;
