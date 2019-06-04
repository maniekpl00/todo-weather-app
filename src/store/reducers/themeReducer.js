import * as actionTypes from '../actions/actionTypes';
import themeService from '../../services/themeService';
import initialState from './initialState';

export default function themeReducer(state = initialState.theme, action) {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return themeService.changeTheme(action.theme);

    default:
      return state;
  }
}
