import React from 'react';
import { shallow } from 'enzyme';

import TaskLabel from './index';
import { StyledTaskLabel } from './index.styles';

describe('<TaskLabel />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TaskLabel />);
    expect(wrapper.find(StyledTaskLabel));
  });
});
