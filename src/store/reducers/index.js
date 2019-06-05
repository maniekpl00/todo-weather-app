import { combineReducers } from 'redux';
import tasks from './tasksReducer';
import theme from './themeReducer';
import language from './languageReducer';

export default combineReducers({
  tasks,
  theme,
  language,
});
