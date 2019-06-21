import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/pl';
import 'moment/locale/en-gb';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localePl from 'react-intl/locale-data/pl';
import messagesEn from '../../translations/en.json';
import messagesPl from '../../translations/pl.json';

addLocaleData([...localeEn, ...localePl]);

const messages = {
  en: messagesEn,
  pl: messagesPl,
};

const withLanguage = WrappedComponent => {
  return class extends Component {
    render() {
      const { language } = this.props;
      moment.locale(language);

      return (
        <IntlProvider key={language} locale={language} messages={messages[language]}>
          <MuiPickersUtilsProvider utils={MomentUtils} locale={language} moment={moment}>
            <WrappedComponent {...this.props} />
          </MuiPickersUtilsProvider>
        </IntlProvider>
      );
    }
  };
};

const mapStateToProps = state => ({
  language: state.language,
});

const composedHoc = compose(
  connect(mapStateToProps),
  withLanguage,
);

export default composedHoc;
