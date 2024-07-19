import styled, { createGlobalStyle } from 'styled-components';

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

  button, input {
    border: none;
    outline: none;
    background-color: unset;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  html {
    font-size: 16px;
    font-family: 'Cabin', sans-serif;
  }
`;

export const LayoutWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem 0rem 1rem;
  gap: 3.5rem;

  & > section  {
    width: 100%;
  }
`;
