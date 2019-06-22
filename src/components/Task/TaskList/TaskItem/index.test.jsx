import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../themes/blueTheme';

import { TaskItem } from './index';
import { StyledTaskItem, CheckBoxWrapper } from './index.styles';

const props = {
  item: {
    id: '1',
    name: 'Study',
    tag: 'Learning',
    finished: true,
    term: '2019-12-09',
  },
};

const createMockElement = item => (
  <ThemeProvider theme={theme}>
    <TaskItem item={item} />
  </ThemeProvider>
);

describe('<TaskItem finished={true} /> Finished task', () => {
  let wrapper;

  beforeEach(() => {
    const finished = true;
    wrapper = mount(createMockElement({ ...props.item, finished }));
  });

  it('<StyledTaskItem finished={true} /> should has correct background-color', () => {
    expect(wrapper.find(StyledTaskItem)).toHaveStyleRule('background-color', theme.taskFinishedBackgroundColor);
  });

  it('<CheckBoxWrapper finished={true} /> should has correct background-color', () => {
    expect(wrapper.find(CheckBoxWrapper)).toHaveStyleRule('background-color', theme.primaryColor);
  });

  it('<CheckBoxWrapper finished={true} /> ::after should has correct content', () => {
    expect(wrapper.find(CheckBoxWrapper)).toHaveStyleRule('content', `'✓'`, { modifier: '::after' });
  });
});

describe('<TaskItem finished={false} /> Unfinished Task', () => {
  let wrapper;

  beforeEach(() => {
    const finished = false;
    wrapper = mount(createMockElement({ ...props.item, finished }));
  });

  it('<StyledTaskItem finished={false} /> should has correct background-color', () => {
    expect(wrapper.find(StyledTaskItem)).toHaveStyleRule('background-color', theme.taskBackgroundColor);
  });

  it('<CheckBoxWrapper finished={false} /> should has correct background-color', () => {
    expect(wrapper.find(CheckBoxWrapper)).toHaveStyleRule('background-color', 'unset');
  });

  it('<CheckBoxWrapper finished={false} /> ::after unfinished should has correct content', () => {
    expect(wrapper.find(CheckBoxWrapper)).toHaveStyleRule('content', `''`, { modifier: '::after' });
  });
});
