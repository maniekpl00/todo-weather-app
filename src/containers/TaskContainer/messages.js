import { defineMessages } from 'react-intl';

const scope = 'TaskContainer';

export default defineMessages({
  nameError: {
    id: `${scope}.nameError`,
    defaultMessage: 'Task name must have at least 4 characters',
  },
  tagError: {
    id: `${scope}.tagError`,
    defaultMessage: 'Tag must have at least 2 characters',
  },
  termError: {
    id: `${scope}.termError`,
    defaultMessage: 'The term date must be today or after today',
  },
});
