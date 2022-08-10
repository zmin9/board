import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  @supports (font-variation-settings: normal) {
    * {
      font-family: 'Inter var', sans-serif;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    margin: 0;
    background-color: hsl(0, 0%, 97%);
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  button {
    border-style: none;
  }

  a {
    text-decoration: none;
  }
  
  input[type='text'], textarea {
    border-radius: 0;
    background-color: transparent;
  }
`;

export default GlobalStyle;
