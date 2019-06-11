import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: 'Roboto', 'Open Sans', sans-serif;
  }

  a {
    display: block;
    text-decoration: none;
  }

  button, 
  input {
    outline: none;
  }
`;

export default GlobalStyle;
