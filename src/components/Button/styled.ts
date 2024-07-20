import styled, { css } from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.875rem;
  transition: background-color 0.14s ease-out;
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.l6};
    font-weight: 500;

    &:hover {
      background-color: ${theme.colors.placeholder}E0;
    }
  `}

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
