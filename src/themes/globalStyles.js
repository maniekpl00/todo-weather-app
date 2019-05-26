import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Open Sans', sans-serif;
  }

  a {
    display: block;
    text-decoration: none;
  }

  button {
    outline: none;
  }
`;

export default GlobalStyle;
