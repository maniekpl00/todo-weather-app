import { DEFAULT_THEME } from '../themes';

const THEME_KEY = 'theme_key';

export default {
  loadTheme() {
    const theme = localStorage.getItem(THEME_KEY);
    return theme || DEFAULT_THEME;
  },

  changeTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    return theme;
  }
};
