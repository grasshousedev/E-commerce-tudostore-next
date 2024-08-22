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

    span {
      display: none;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a.profile-link {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {
    height: calc(65.6406px + 1rem);
    width: calc(100% - 2rem);
    flex-direction: row;
    top: unset;
    bottom: 1rem;
    position: fixed;
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.placeholder}26;
    /* padding-bottom: 1.6rem; */

    @media screen and (max-width: 500px) {
      height: calc(61.6406px + 1rem);
    }

    @media screen and (max-width: 330px) {
      height: fit-content;
      width: fit-content;
      left: 50%;
      transform: translateX(-50%);
    }

    nav {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      @media screen and (max-width: 426px) {
        gap: 0.7rem;
      }

      @media screen and (max-width: 350px) {
        gap: 0.3rem;
      }

      @media screen and (max-width: 330px) {
        flex-wrap: wrap;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      a.profile-link {
        display: flex;
      }

      a {
        max-width: 70px;
        display: flex;
        flex-direction: column;

        img {
          width: 30px;
          height: 30px;
        }

        span {
          display: block;
          white-space: nowrap;

          ${({ theme }) => css`
            font-size: ${theme.fontSizes.small};
            color: inherit;
          `}
        }
      }
    }

    a.profile-link {
      display: none;
    }

    /* a.page-link {
      position: relative;
    }

    a.home-redirect::after {
      content: 'Tudo Store';
    }

    a.home-link::after {
      content: 'Produtos';
    }

    a.bag-link::after {
      content: 'Bolsa';
    }

    a.profile-link::after {
      content: 'Perfil';
    }

    a.profile-link {
      display: none;
    }

    a.page-link::after {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 100%);
      white-space: nowrap;

      ${({ theme }) => css`
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.dark};
    `}
    } */
  }
`;
