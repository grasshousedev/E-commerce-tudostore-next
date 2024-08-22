import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin-inline: auto;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  gap: 6.375rem;
  justify-content: center;

  @media screen and (max-width: 912px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  section.left-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 871px;
  }

  section.right-content {
    @media screen and (max-width: 912px) {
      display: flex;
      flex-direction: column-reverse;
    }

    & > button {
      margin-left: auto;
      margin-top: 1.563rem;

      @media screen and (max-width: 912px) {
        margin-top: unset;
        margin-left: unset;
        margin-bottom: 1.563rem;
        margin-right: auto;
      }
    }
  }
`;

export const ContainerResume = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  min-width: 218px;

  @media screen and (max-width: 912px) {
    button {
      width: 100%;
    }
  }

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

export const ContainerCheckoutFinal = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  height: calc(100svh - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .success-animation {
    margin-inline: auto;
    margin-bottom: 2rem;

    .checkmark {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: block;
      stroke-width: 2;
      stroke: #4bb71b;
      stroke-miterlimit: 10;
      box-shadow: inset 0px 0px 0px #4bb71b;
      animation:
        fill 0.4s ease-in-out 0.4s forwards,
        scale 0.3s ease-in-out 0.9s both;
      position: relative;
      top: 5px;
      right: 5px;
      margin: 0 auto;
    }

    .checkmark__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #4bb71b;
      fill: ${({ theme }) => theme.colors.background};
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
      100% {
        stroke-dashoffset: 0;
      }
    }

    @keyframes scale {
      0%,
      100% {
        transform: none;
      }

      50% {
        transform: scale3d(1.1, 1.1, 1);
      }
    }

    @keyframes fill {
      100% {
        box-shadow: inset 0px 0px 0px 30px #4bb71b;
      }
    }
  }

  h1 {
    text-align: center;
  }

  button {
    margin-inline: auto;
    margin-top: 2rem;
  }
`;
