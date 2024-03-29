import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import GlobalStyle from '../../styles/globalStyles';
import { StyledPageLayout, ChildrenContainer } from './index.styles';

const PageLayout = props => {
  const { children, theme } = props;
  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledPageLayout>
        <GlobalStyle />
        <ChildrenContainer>{children}</ChildrenContainer>
      </StyledPageLayout>
    </ThemeProvider>
  );
};

function mapStateToProps(state) {
  return {
    theme: state.theme,
  };
}

export default connect(mapStateToProps)(PageLayout);
