import React, { Component } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/pl';
import 'moment/locale/en-gb';

const withLanguage = WrappedComponent => {
  return class extends Component {
    state = {
      locale: 'en'
    };
    
    render() {
      moment.locale(this.state.locale);
      const newProps = {
        ...this.props
      };
      return (
        <MuiPickersUtilsProvider utils={MomentUtils} locale={this.state.locale} moment={moment}>
          <WrappedComponent {...newProps} />
        </MuiPickersUtilsProvider>
      );
    }
  };
};

export default withLanguage;
