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

  & > div.empty {
    height: 78vh;
    height: 78svh;
    width: 100%;

    a {
      white-space: nowrap;
    }
  }
`;

export const ContainerSmallScreenResume = styled.section`
  display: none;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 963px) {
    display: flex;
  }

  @media screen and (max-width: 353px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    & > * {
      width: 100%;
    }
  }

  & > span {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.l6};
      color: ${theme.colors.dark};
      font-weight: 500;

      .total {
        color: ${theme.colors.accent['1']};
        font-weight: 600;
      }
    `}
  }
`;
