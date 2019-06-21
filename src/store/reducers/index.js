import { combineReducers } from 'redux';
import tasks from './tasksReducer';
import weatherData from './weatherReducer';
import theme from './themeReducer';
import language from './languageReducer';

export default combineReducers({
  tasks,
  weatherData,
  theme,
  language,
});
