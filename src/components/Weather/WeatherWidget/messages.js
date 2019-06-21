import { defineMessages } from 'react-intl';

const scope = 'Weather.WeatherWidget';

export default defineMessages({
  humadity: {
    id: `${scope}.humadity`,
    defaultMessage: 'Humadity',
  },
  pressure: {
    id: `${scope}.pressure`,
    defaultMessage: 'Pressure',
  },
  wind: {
    id: `${scope}.wind`,
    defaultMessage: 'Wind',
  },
  updatedTime: {
    id: `${scope}.updatedTime`,
    defaultMessage: 'Updated',
  },
});
