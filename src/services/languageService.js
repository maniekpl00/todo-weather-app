import { DEFAULT_LANGUAGE } from '../translations';

const LANGUAGE_KEY = 'language_key';

export default {
	loadLanguage() {
		const language = localStorage.getItem(LANGUAGE_KEY);
		return language || DEFAULT_LANGUAGE;
	},

	changeLanguage(language) {
		localStorage.setItem(LANGUAGE_KEY, language);
		return language;
	},
};
