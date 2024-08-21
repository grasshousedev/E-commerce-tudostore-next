import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin-block: 2.5rem;

  & > header {
    width: 80%;
    align-self: center;

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

    p {
      ${({ theme }) => css`
        color: ${theme.colors.secondary};
        font-size: ${theme.fontSizes.base};
      `}
      margin-top: 1rem;
    }
  }
`;

export const Cards = styled.section`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 945px) {
    grid-template-columns: 1fr;
  }
`;
