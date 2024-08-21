import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin-block: 2.5rem;

  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.l2};

      @media screen and (max-width: 536px) {
        font-size: ${theme.fontSizes.l3};
      }
    `}
    font-weight: 400;
  }
`;
