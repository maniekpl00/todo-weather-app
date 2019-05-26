import * as actionTypes from './actionTypes';

export function changeTheme(theme) {
  return {
    type: actionTypes.CHANGE_THEME,
    theme
  };
}
