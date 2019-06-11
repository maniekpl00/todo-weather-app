import languageService from '../../services/languageService';
import taskService from '../../services/taskService';
import themeService from '../../services/themeService';

export default {
  tasks: taskService.loadTasks(),
  theme: themeService.loadTheme(),
  language: languageService.loadLanguage(),
  weatherData: {
    weather: null,
    loading: false
  }
};
