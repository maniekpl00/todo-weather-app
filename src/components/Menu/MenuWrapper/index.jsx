import React from 'react';
import { StyledMenuWrapper } from './index.styles';

const MenuWrapper = ({ children, show }) => <StyledMenuWrapper show={show}>{children}</StyledMenuWrapper>;

export default MenuWrapper;
