import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 62px;
  width: 62px;
  height: calc(100svh - 2rem);
  position: sticky;
  top: 0;
  border-radius: 0.5rem;

  a {
    display: block;
    width: 100%;
    padding: 0.412rem;
    transition:
      background-color 0.2s ease-out,
      color 0.05s;

    &.in {
      ${({ theme }) => css`
        background-color: ${theme.colors.placeholder};
        color: ${theme.colors.white};
        border-radius: 0.8rem;
      `}
    }

    svg,
    img {
      width: 100%;
      height: 100%;
    }

    img {
      color: ${({ theme }) => theme.colors.primary};
      width: 107%;
      height: 107%;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
