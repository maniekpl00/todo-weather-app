import React from 'react';
import { shallow } from 'enzyme';

import TaskList from './index';
import TaskItem from './TaskItem';

const tasks = [
  { id: '1', name: 'Task1', tag: 'Tag1', finished: true, term: '2019-05-20' },
  { id: '2', name: 'Task2', tag: 'Tag2', finished: true, term: '2019-05-20' },
  { id: '3', name: 'Task3', tag: 'Tag3', finished: true, term: '2019-05-20' },
];

const createMockElement = () => <TaskList tasks={tasks} />;

describe('<TaskList tasks={tasks} /> Test amount of tasks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(createMockElement());
  });

  it(`<TaskList tasks={tasks} /> should contains ${tasks.length} <TaskItem />`, () => {
    expect(wrapper.find(TaskItem)).toHaveLength(tasks.length);
  });
});
