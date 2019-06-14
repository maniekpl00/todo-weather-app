import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import * as themeActions from '../../store/actions/themeActions';
import Selector from '../../components/UI/Selector';
import themes from '../../themes';
import messages from './messages';

class ThemeSelectHandler extends Component {
  state = {
    open: false,
    value: {
      id: this.props.theme,
      title: this.props.intl.formatMessage({ ...messages[this.props.theme] }),
    },
  };

  closeSelectHandler = () => {
    this.setState({ open: false });
  };

  openSelectHandler = () => {
    this.setState({ open: true });
  };

  themeChangeHandler = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.changeTheme(value.id);
  };

  filterThemes = () => {
    return Object.keys(themes)
      .filter(theme => theme !== this.props.theme)
      .map(theme => ({
        id: theme,
        title: this.props.intl.formatMessage({ ...messages[theme] }),
      }));
  };

  render() {
    const { open, value } = this.state;
    const { intl } = this.props;
    const options = this.filterThemes();

    return (
      <Selector
        open={open}
        closed={this.closeSelectHandler}
        opened={this.openSelectHandler}
        value={value}
        changed={this.themeChangeHandler}
        options={options}
        label={intl.formatMessage({ ...messages.label })}
      />
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = {
  changeTheme: themeActions.changeTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(ThemeSelectHandler));
