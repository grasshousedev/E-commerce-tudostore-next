import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 65.6406px;
  width: 65.6406px;
  height: calc(100svh - 2rem);
  position: sticky;
  top: 1rem;
  border-radius: 0.5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.412rem;
    transition:
      background-color 0.2s ease-out,
      color 0.05s;
    border-radius: 0.8rem;

    &.in {
      ${({ theme }) => css`
        background-color: ${theme.colors.placeholder};
        color: ${theme.colors.white};
      `}
    }

    svg,
    img {
      width: 27px;
      height: 27px;
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
