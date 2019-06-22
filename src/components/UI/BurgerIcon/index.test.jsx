import React from 'react';
import { mount } from 'enzyme';
import { ReactComponent as BarsSolid } from '../../../assets/bars-solid.svg';
import { ReactComponent as TimesSolid } from '../../../assets/times-solid.svg';

import BurgerIcon from './index';
import { StyledBurgerIcon } from './index.styles';

const props = { open: false };

const createMockElement = ({ open }) => <BurgerIcon open={open} />;

describe('<BurgerIcon open={true} /> Modal opened', () => {
  let wrapper;

  beforeEach(() => {
    const open = true;
    wrapper = mount(createMockElement({ ...props, open }));
  });

  it('<BurgerIcon open={true} /> should contain <TimesSolid />', () => {
    expect(wrapper.find(TimesSolid).exists()).toBeTruthy();
    expect(wrapper.find(BarsSolid).exists()).toBeFalsy();
  });

  it('<StyledBurgerIcon open={true} /> should has correct filter', () => {
    expect(wrapper.find(StyledBurgerIcon)).toHaveStyleRule('filter', 'unset');
  });
});

describe('<BurgerIcon open={false} /> Modal opened', () => {
  let wrapper;

  beforeEach(() => {
    const open = false;
    wrapper = mount(createMockElement({ ...props, open }));
  });

  it('<BurgerIcon open={false} /> should contain <BarsSolid />', () => {
    expect(wrapper.find(BarsSolid).exists()).toBeTruthy();
    expect(wrapper.find(TimesSolid).exists()).toBeFalsy();
  });

  it('<StyledBurgerIcon open={false} /> should has correct filter', () => {
    expect(wrapper.find(StyledBurgerIcon)).toHaveStyleRule('filter', 'drop-shadow(1px 1px 1px black)');
  });
});
