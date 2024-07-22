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

  & > *:nth-child(2) {
    width: 100%;
  }

  .load-animation {
    background: linear-gradient(
      -220deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05)
    );
    background-size: 600% 600%;

    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 1s ease infinite;
    animation: AnimationName 1s ease infinite;

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;
