import Link from 'next/link';

import styled, { css } from 'styled-components';

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.875rem;
  transition:
    background-color 0.14s ease-out,
    color 0.14s ease-out;
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.l6};
    font-weight: 500;

    @media screen and (max-width: 536px) {
      font-size: ${({ theme }) => theme.fontSizes.base};
    }

    &:hover {
      background-color: ${theme.colors.placeholder}E0;
    }

    &:active {
      transition: background-color 0.07s ease-out;
      background-color: ${theme.colors.placeholder}C0;
    }

    &.outline {
      border: 1px solid ${theme.colors.dark};
      color: ${theme.colors.dark};
      background: transparent;

      &.danger {
        border: 1px solid ${theme.colors.warnColors.danger};
        color: ${theme.colors.warnColors.danger};

        &:hover {
          background-color: ${theme.colors.warnColors.danger}E0;
          color: ${theme.colors.white};
        }

        &:active {
          background-color: ${theme.colors.warnColors.danger}C0;
        }
      }

      &:hover {
        background-color: ${theme.colors.placeholder}E0;
        color: ${theme.colors.white};
      }

      &:active {
        background-color: ${theme.colors.placeholder}C0;
      }
    }
  `}

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

export const Container = styled.button`
  ${style}
`;

export const ContainerLink = styled(Link)`
  ${style}
`;
