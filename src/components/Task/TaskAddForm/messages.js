import { defineMessages } from 'react-intl';

const scope = 'Task.TaskAddForm';

export default defineMessages({
  submitTitle: {
    id: `${scope}.submitTitle`,
    defaultMessage: 'Submit task',
  },
  placeholderName: {
    id: `${scope}.placeholderName`,
    defaultMessage: 'Task name',
  },
  placeholderTag: {
    id: `${scope}.placeholderTag`,
    defaultMessage: 'Tag',
  },
  placeholderTerm: {
    id: `${scope}.placeholderTerm`,
    defaultMessage: 'Term',
  },
});
