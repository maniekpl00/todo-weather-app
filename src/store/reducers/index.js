import { combineReducers } from 'redux';
import tasks from './tasksReducer';
import theme from './themeReducer';

export default combineReducers({
  tasks,
  theme
});
