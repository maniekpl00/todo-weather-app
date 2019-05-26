import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes/themes';
import * as themeActions from '../../store/actions/themeActions';
import GlobalStyle from '../../themes/globalStyles';
import { LightSwitcherButton, DarkSwitcherButton, LayoutContainer, ThemeButtonContainer } from './PageLayout.styles';

class PageLayout extends Component {
  switchToLightThemeHandler = () => {
    this.props.changeTheme('lightTheme');
  };

  switchToDarkThemeHandler = () => {
    this.props.changeTheme('darkTheme');
  };

  render() {
    const { children, theme } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <LayoutContainer>
          <GlobalStyle />
          <ThemeButtonContainer>
            <LightSwitcherButton onClick={this.switchToLightThemeHandler}>Light</LightSwitcherButton>
            <DarkSwitcherButton onClick={this.switchToDarkThemeHandler}>Dark</DarkSwitcherButton>
          </ThemeButtonContainer>
          <main>{children}</main>
        </LayoutContainer>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}

const mapDispatchToProps = {
  changeTheme: themeActions.changeTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout);
