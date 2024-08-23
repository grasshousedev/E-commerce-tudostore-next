import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.main`
  button.btn-load-more {
    display: block;
    ${({ theme }) => css`
      background-color: ${theme.colors.accent['1']};
      font-size: ${theme.fontSizes.l6};
      color: ${theme.colors.white};
      -webkit-appearance: none;
      -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
      font-weight: 500;
    `}
    margin-block: 2rem;
    margin-inline: auto;
    border-radius: 0.875rem;
    height: 50px;
    padding-inline: 1.5rem;
    transition: 0.15s background-color ease-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent['2']};
    }

    &:active {
      transition: none;
      color: transparent;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const SearchBar = styled.div`
  width: clamp(200px, 50%, 500px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  position: sticky;
  top: 1rem;
  z-index: 9000;

  &.off {
    align-items: center;

    span.info-search {
      display: none;
    }

    input {
      animation: decreaseSize 0.15s ease forwards;
      margin-top: 0;
      cursor: pointer;
    }
  }

  &.focused {
    align-items: flex-start;

    span.info-search {
      display: inline;
    }

    input {
      animation: unset;
      margin-top: 0.5rem;
    }
  }

  span.info-search {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.base};
      color: ${({ theme }) => theme.colors.secondary};
    `}
    text-transform: capitalize;
  }

  input {
    height: 49px;
    border-radius: 0.75rem;
    padding-inline: 1.4rem;
    width: 100%;
    margin-top: 0.5rem;
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      font-size: ${theme.fontSizes.l6};
    `}
    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder}80;
    }
    -webkit-appearance: none;
    -webkit-box-shadow: 0 0 16px ${({ theme }) => theme.colors.placeholder}26;
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.placeholder}26;
    transition: margin-top 0.2s;

    @media screen and (max-width: 536px) {
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
  }

  .input-search-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @keyframes decreaseSize {
    100% {
      height: 50px;
      width: 50px;
    }
  }

  @media screen and (max-width: 963px) {
    width: 100%;
  }
`;
