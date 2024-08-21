import styled, { css } from 'styled-components';

const cardStyle = css`
  border-radius: 1.313rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border: 0px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.m-border-radius {
    border-radius: 0.813rem;
  }

  &.m-padding {
    padding: 2rem;

    @media screen and (max-width: 536px) {
      padding: 1.25rem;
    }
  }

  &.error {
    transition: 0.3s border ease-out;
    border: 1px solid ${({ theme }) => theme.colors.warnColors.danger};
    padding: calc(1rem - 1px);
  }

  header {
    padding: 0.5rem;

    & > h1,
    h2 {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l4};

        @media screen and (max-width: 536px) {
          font-size: ${theme.fontSizes.l5};
        }
      `}
    }
  }

  .container-img {
    width: 46px;
    height: 46px;
    background-color: ${({ theme }) => theme.colors.accent[1]}80;
    border-radius: 5rem;
    position: relative;
    cursor: pointer;
    margin-inline: 0.5rem;

    img,
    & > svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    img {
      border-radius: 5rem;
    }

    & > svg {
      padding: 0.6rem;
    }

    .edit-icon {
      position: absolute;
      bottom: -5px;
      right: -5px;

      svg {
        width: 1rem;
        height: 1rem;
      }

      .container-newimg {
        position: absolute;
        bottom: 0;
        left: 1.5rem;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        & > * {
          display: block;
        }

        input {
          background-color: ${({ theme }) => theme.colors.white};
          box-shadow: 0 4px 16px ${({ theme }) => theme.colors.placeholder}26;
          width: 180px;
          height: 1.6rem;
          padding: 0.3rem;
          border-radius: 0.3rem;
          font-size: ${({ theme }) => theme.fontSizes.base};
        }

        button {
          svg {
            width: 1rem;
            height: 1rem;
            color: ${({ theme }) => theme.colors.warnColors.success};
          }
        }
      }
    }
  }
`;

export const Card = styled.div`
  ${cardStyle}
`;

export const CardSection = styled.section`
  ${cardStyle}
`;

export const ContainerCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 536px) {
    flex-direction: column;
  }

  &.center-items {
    height: 100%;
    align-items: center;
  }

  .container-left {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.l6};
    gap: 0.5rem;
    padding: 0.5rem;

    @media screen and (max-width: 536px) {
      font-size: ${({ theme }) => theme.fontSizes.base};
      align-self: flex-start;
    }

    &.w-100 {
      width: 100%;
    }

    div {
      font-size: inherit;
    }

    span:not(span.accent-color):not(span.plchldr) {
      font-size: inherit;
      color: ${({ theme }) => theme.colors.dark};
    }

    @media screen and (max-width: 536px) {
      span.plchldr {
        font-size: ${({ theme }) => theme.fontSizes.base};
      }
    }

    .empty {
      p {
        ${({ theme }) => css`
          color: ${theme.colors.secondary};
          font-size: ${theme.fontSizes.l6};
        `}
      }
    }
  }

  .container-right {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 536px) {
      width: 100%;
    }

    button {
      &.auto-top {
        margin-top: auto;
      }
    }
  }
`;
