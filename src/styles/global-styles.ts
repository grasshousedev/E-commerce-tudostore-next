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
      #1a1f16cc,
      rgba(0, 0, 0, 0.07),
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.02),
      #1a1f1633,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.07),
      #1a1f16cc
    );
    background-size: 600% 600%;

    -webkit-animation: AnimationName 1.1s ease infinite;
    -moz-animation: AnimationName 1.1s ease infinite;
    animation: AnimationName 1.1s ease infinite;

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

  .accent-color {
    color: ${({ theme }) => theme.colors.accent[1]};
  }

  .title-all-uppercase-spaced {
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.l4};
  }
`;
