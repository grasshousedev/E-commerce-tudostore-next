import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  html {
    font-size: 16px;
    font-family: 'Cabin', sans-serif;
  }
`;
