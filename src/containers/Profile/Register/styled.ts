import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin-block: 2.5rem;
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 822px) {
    flex-direction: column;
  }

  & > header {
    width: 80%;
    align-self: center;

    @media screen and (max-width: 822px) {
      width: 100%;
      align-self: flex-start;
    }

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

  section {
    width: 100%;
  }
`;
