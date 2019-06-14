import * as actionTypes from './actionTypes';
import languageService from '../../services/languageService';

export function changeLanguage(language) {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language: languageService.changeLanguage(language),
  };
}
