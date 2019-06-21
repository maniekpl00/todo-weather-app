import React from 'react';
import { ReactComponent as TimesSolid } from '../../../assets/times-solid.svg';
import { StyledCancelIcon } from './index.styles';

const CancelIcon = props => (
  <StyledCancelIcon onClick={props.clicked}>
    <TimesSolid />
  </StyledCancelIcon>
);

export default CancelIcon;
