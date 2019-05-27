import * as actionTypes from './actionTypes';

export function loadTheme() {
  return {
    type: actionTypes.LOAD_THEME
  };
}

export function changeTheme(theme) {
  return {
    type: actionTypes.CHANGE_THEME,
    theme
  };
}
