import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import languageService from '../../services/languageService';

export default function languageReducer(state = initialState.language, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return languageService.changeLanguage(action.language);

    default:
      return state;
  }
}
