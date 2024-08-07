import styled, { css } from 'styled-components';

export const Container = styled.section`
  margin-top: 2.5rem;

  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.l2};
    `}
    font-weight: 400;
  }
`;

export const BagItems = styled.div`
  margin-top: 1.5rem;

  div + div {
    margin-top: 1.5rem;
  }
`;

export const BagItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.313rem;
  padding: 1rem 1.5rem;
  gap: 2rem;

  .left-container {
    image {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .right-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top {
      ${({ theme }) => css`
        h2 {
          font-size: ${theme.fontSizes.l4};
          color: ${theme.colors.dark};
        }

        .brand {
          font-size: ${theme.fontSizes.l6};
          color: ${theme.colors.secondary};
          margin-top: 0.5rem;
        }

        .rating {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;

          .stars {
            ${({ theme }) => css`
              color: ${theme.colors.accent[1]};
            `}
            text-wrap: nowrap;

            svg {
              width: 1.5rem;
              height: 1.5rem;
            }

            svg + svg {
              margin-left: 0.5rem;
            }
          }

          .rating-number {
            ${({ theme }) => css`
              font-size: ${theme.fontSizes.l6};
              color: ${theme.colors.accent[1]};
            `}
          }
        }
      `}
    }

    .container-bottom {
      display: flex;
      justify-content: space-between;

      .price-repeat {
        font-size: ${({ theme }) => theme.fontSizes.l6};
        color: ${({ theme }) => theme.colors.dark};
      }

      .repeat-manage {
        display: flex;
        align-items: center;
        gap: 1rem;

        button:nth-child(1) {
          color: ${({ theme }) => theme.colors.warnColors.danger};
        }

        button ~ button {
          color: ${({ theme }) => theme.colors.warnColors.success};
        }

        button {
          width: 2.125rem;
          height: 2.125rem;
          padding: 0.5rem;

          svg {
            width: 100%;
            height: 100%;
          }
        }

        .repeat-number {
          ${({ theme }) => css`
            color: ${theme.colors.dark};
            font-size: ${theme.fontSizes.l6};
          `}
        }
      }
    }
  }
`;

export const BagItemAnimated = styled.div`
  height: 236px;
  border-radius: 1.313rem;
`;
