import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function languageReducer(state = initialState.language, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return action.language;

    default:
      return state;
  }
}
