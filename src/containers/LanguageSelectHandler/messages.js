import { defineMessages } from 'react-intl';

const scope = 'LanguageSelectHandler';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Change language',
  },
  en: {
    id: `${scope}.en`,
    defaultMessage: 'English',
  },
  pl: {
    id: `${scope}.pl`,
    defaultMessage: 'Polish',
  },
});
