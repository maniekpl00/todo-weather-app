import React from 'react';
import {ReactComponent as BarsSolid} from '../../../assets/bars-solid.svg';
import {ReactComponent as TimesSolid} from '../../../assets/times-solid.svg';
import { StyledBurgerIcon } from './BurgerIcon.styles';

const BurgerIcon = ({ open, ...props }) => {
  
	return (
		<StyledBurgerIcon onClick={props.clicked} open={open}>
      {open ? <TimesSolid /> : <BarsSolid />}
		</StyledBurgerIcon>
	);
};

export default BurgerIcon;
