import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as themeActions from '../../store/actions/themeActions';
import themes, { LIGHT_THEME, DARK_THEME } from '../../themes';
import GlobalStyle from '../../themes/globalStyles';
import {
  LightSwitcherButton,
  DarkSwitcherButton,
  StyledPageLayout,
  ThemeButtonContainer,
  ChildrenContainer
} from './PageLayout.styles';

class PageLayout extends Component {
  componentDidMount() {
    this.props.loadTheme();
  }

  switchToLightThemeHandler = () => {
    this.props.changeTheme(LIGHT_THEME);
  };

  switchToDarkThemeHandler = () => {
    this.props.changeTheme(DARK_THEME);
  };

  render() {
    const { children, theme } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <StyledPageLayout>
          <GlobalStyle />
          {/* <ThemeButtonContainer>
            <LightSwitcherButton onClick={this.switchToLightThemeHandler}>Light</LightSwitcherButton>
            <DarkSwitcherButton onClick={this.switchToDarkThemeHandler}>Dark</DarkSwitcherButton>
          </ThemeButtonContainer> */}
          <ChildrenContainer>{children}</ChildrenContainer>
        </StyledPageLayout>
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
  loadTheme: themeActions.loadTheme,
  changeTheme: themeActions.changeTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLayout);
