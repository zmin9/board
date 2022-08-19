import { createGlobalStyle } from 'styled-components';
import mediaQuery from './mediaQuery';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.text.high};
    vertical-align: baseline;
  }

  span, p, pre, li {
    color: ${({ theme }) => theme.text.medium};
  }

  button {
    border-style: none;
  }

  a {
    text-decoration: none;
  }

  input[type='text'], input[type='password'], textarea {
    border: 0;
    border-bottom: solid 1px ${({ theme }) => theme.outline};
    background-color: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text.medium};
    border-radius: 4px 4px 0 0;
    font-size: 15px;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;

    ${mediaQuery.mobile} {
      font-size: 15px;
    }
  }

  textarea {
    white-space: pre-wrap;
  }

  hr {
    margin: 4px 0;
    border: solid 0.5px ${({ theme }) => theme.divider};
  }
`;

export default GlobalStyle;
