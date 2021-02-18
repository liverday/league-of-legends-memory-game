import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, input {
    font-family: 'Roboto', Helvetica, sans-serif;
  }
`;
