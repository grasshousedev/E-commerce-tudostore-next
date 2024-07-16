import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  height: calc(100svh - 2rem);
  position: sticky;
  top: 1rem;
  left: 1rem;
  border-radius: 0.5rem;

  a {
    display: block;
    width: 100%;
    padding: 0.4rem;
    transition:
      background-color 0.2s,
      color 0.1s ease;

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
