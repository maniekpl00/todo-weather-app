import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../themes/blueTheme';

import TaskLabel from './index';
import { TaskNameSpan, TaskTermWrapper } from './index.styles';

const props = { name: 'Task', tag: 'Tag', finished: true, term: '2019-05-20', termAlerted: true };

const createMockElement = ({ name, tag, finished, termAlerted }) => (
  <ThemeProvider theme={theme}>
    <TaskLabel name={name} tag={tag} finished={finished} termAlerted={termAlerted} />
  </ThemeProvider>
);

describe('<TaskLabel finished={true} termAlerted={true} /> Finished TaskLabel', () => {
  let wrapper;

  beforeEach(() => {
    const finished = true;
    const termAlerted = true;
    wrapper = mount(createMockElement({ ...props, finished, termAlerted }));
  });

  it('<TaskNameSpan finished={true} alerted={true} /> should has correct text-decoration', () => {
    expect(wrapper.find(TaskNameSpan)).toHaveStyleRule('text-decoration', 'line-through');
  });

  it('<TaskTermWrapper finished={true} alerted={true} /> should has correct color', () => {
    expect(wrapper.find(TaskTermWrapper)).toHaveStyleRule('color', 'red');
  });
});

describe('<TaskLabel finished={false} termAlerted={false} /> Unfinished TaskLabel', () => {
  let wrapper;

  beforeEach(() => {
    const finished = false;
    const termAlerted = false;
    wrapper = mount(createMockElement({ ...props, finished, termAlerted }));
  });

  it('<TaskNameSpan finished={false} alerted={false} /> should has correct text-decoration', () => {
    expect(wrapper.find(TaskNameSpan)).toHaveStyleRule('text-decoration', 'none');
  });

  it('<TaskTermWrapper finished={false} alerted={false} /> should has correct color', () => {
    expect(wrapper.find(TaskTermWrapper)).toHaveStyleRule('color', 'inherit');
  });
});
