import * as actionTypes from './actionTypes';

export function changeLanguage(language) {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language,
  };
}
