import styled, { css } from 'styled-components';

const cardStyle = css`
  border-radius: 1.313rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.m-padding {
    padding: 2rem;
  }

  header {
    padding: 0.5rem;

    * > h1,
    h2 {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l4};
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

  &.center-items {
    height: 100%;
    align-items: center;
  }

  .container-left {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.l6};
    gap: 0.5rem;
    padding: 0.5rem;

    div {
      font-size: inherit;
    }

    span:not(span.accent-color) {
      font-size: inherit;
      color: ${({ theme }) => theme.colors.dark};
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

    button {
      &.auto-top {
        margin-top: auto;
      }
    }
  }
`;
