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

  section.right-content {
    button {
      margin-left: auto;
      margin-top: 1.563rem;
    }
  }
`;

export const ContainerResume = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  min-width: 218px;

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

export const ContainerOrderInfos = styled.div`
  margin-top: 1rem;

  & > div + div {
    margin-top: 1rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }

  span {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.base};
      color: ${theme.colors.secondary};
    `}
  }
`;

export const ContainerOrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1rem;
  border-block: 1px solid ${({ theme }) => theme.colors.light};
  margin-block: 1rem;

  span {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.l6};
      color: ${theme.colors.accent[1]};
      font-weight: 500;
    `}
  }
`;
