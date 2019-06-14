import * as actionTypes from './actionTypes';
import themeService from '../../services/themeService';

export function changeTheme(theme) {
  return {
    type: actionTypes.CHANGE_THEME,
    theme: themeService.changeTheme(theme),
  };
}
