import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import * as languageActions from '../../store/actions/languageActions';
import languages from '../../translations';
import Selector from '../../components/UI/Selector/Selector';
import messages from './messages';

class LanguageSelectHandler extends Component {
  state = {
    open: false,
    value: {
      id: this.props.language,
      title: this.props.intl.formatMessage({ ...messages[this.props.language] }),
    },
  };

  closeSelectHandler = () => {
    this.setState({ open: false });
  };

  openSelectHandler = () => {
    this.setState({ open: true });
  };

  changeLanguageHandler = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.changeLanguage(value.id);
  };

  filterLanguages = () => {
    return Object.keys(languages)
      .filter(lang => lang !== this.props.language)
      .map(lang => ({
        id: lang,
        title: this.props.intl.formatMessage({ ...messages[lang] }),
      }));
  };

  render() {
    const { open, value } = this.state;
    const { intl } = this.props;
    const options = this.filterLanguages();

    return (
      <Selector
        open={open}
        closed={this.closeSelectHandler}
        opened={this.openSelectHandler}
        value={value}
        changed={this.changeLanguageHandler}
        options={options}
        label={intl.formatMessage({ ...messages.label })}
      />
    );
  }
}

const mapStateToProps = state => ({
  language: state.language,
});

const mapDispatchToProps = {
  changeLanguage: languageActions.changeLanguage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(LanguageSelectHandler));
