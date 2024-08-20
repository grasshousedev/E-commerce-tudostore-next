import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin-inline: auto;
  margin-bottom: 2rem;
  width: 100%;

  display: flex;
  gap: 6.375rem;
  justify-content: center;

  section.left-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 871px;
  }
`;

export const ContainerResume = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;

  header {
    h1 {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l6};
        color: ${theme.colors.black};
        font-weight: 500;
      `}
    }
  }
`;
