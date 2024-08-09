import styled, { css } from 'styled-components';

export const Container = styled.section`
  margin-block: 2.5rem;
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin-inline: auto;

  header {
    width: 80%;
    h1 {
      ${({ theme }) => css`
        color: ${theme.colors.dark};
        font-size: ${theme.fontSizes.l2};
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
