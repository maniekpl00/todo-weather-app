import { defineMessages } from 'react-intl';

const scope = 'ThemeSelectHandler';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Change theme',
  },
  greenTheme: {
    id: `${scope}.greenTheme`,
    defaultMessage: 'Green theme',
  },
  blueTheme: {
    id: `${scope}.blueTheme`,
    defaultMessage: 'Blue theme',
  },
});
