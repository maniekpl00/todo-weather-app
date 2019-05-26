import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function themeReducer(state = initialState.theme, action) {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return action.theme;

    default:
      return state;
  }
}
