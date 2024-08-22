import styled, { css } from 'styled-components';

export const ContainerBagItems = styled.div`
  margin-top: 1.5rem;

  &.m-top-1 {
    margin-top: 1rem;
  }

  &.hide {
    display: none;
  }

  & > div + div {
    margin-top: 1.5rem;
  }

  &.border-divisor {
    & > div {
      border-radius: 0;
      margin-inline: 0.5rem;
    }

    & > div + div {
      border-top: 1px solid ${({ theme }) => theme.colors.placeholder}80;
      padding-top: 1.5rem;
      margin-top: 0.5rem;
    }
  }
`;

export const ContainerBagItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.313rem;
  padding: 1rem 1.5rem;
  gap: 2rem;

  @media screen and (max-width: 400px) {
    padding-inline: 1rem;
    gap: 1rem;
  }

  @media screen and (max-width: 360px) {
    gap: 0rem;
  }

  @media screen and (max-width: 346px) {
    flex-direction: column;
  }

  .left-container {
    width: 30%;
    max-height: 210px;
    max-width: 200px;

    @media screen and (max-width: 536px) {
      width: 50%;
    }

    @media screen and (max-width: 430px) {
      width: 65%;
    }

    @media screen and (max-width: 346px) {
      width: 100%;
      max-width: unset;
      max-height: unset;
    }

    img {
      height: 100%;
      min-width: 200px;
      width: 100%;
      object-fit: contain;

      @media screen and (max-width: 1026px) {
        min-width: 120px;
      }

      @media screen and (max-width: 536px) {
        min-width: unset;
      }
    }
  }

  .right-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    @media screen and (max-width: 536px) {
      padding: 0;
    }

    .container-top {
      span {
        display: block;
      }

      ${({ theme }) => css`
        h2 {
          font-size: ${theme.fontSizes.l4};
          color: ${theme.colors.dark};

          @media screen and (max-width: 536px) {
            font-size: ${theme.fontSizes.l5};
          }
        }

        .brand {
          font-size: ${theme.fontSizes.l6};
          color: ${theme.colors.secondary};
          margin-top: 0.5rem;

          @media screen and (max-width: 536px) {
            font-size: ${theme.fontSizes.base};
          }
        }

        .rating {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;

          @media screen and (max-width: 421px) {
            gap: 1rem;
          }

          .stars {
            ${({ theme }) => css`
              color: ${theme.colors.accent[1]};
            `}
            text-wrap: nowrap;

            svg {
              width: 24px;
              height: 24px;

              @media screen and (max-width: 536px) {
                width: 16px;
                height: 16px;
              }
            }

            svg + svg {
              margin-left: 0.5rem;

              @media screen and (max-width: 421px) {
                margin-left: 0.2rem;
              }
            }
          }

          .rating-number {
            ${({ theme }) => css`
              font-size: ${theme.fontSizes.l6};
              color: ${theme.colors.accent[1]};

              @media screen and (max-width: 536px) {
                font-size: ${theme.fontSizes.base};
              }
            `}
          }
        }
      `}
    }

    .container-bottom {
      display: flex;
      justify-content: space-between;
      padding-block: 0.813rem;
      margin-top: 0.5rem;

      span {
        display: block;
      }

      .price-repeat,
      .repeat-manage {
        padding: 0.5rem;

        @media screen and (max-width: 536px) {
          padding: 0;
        }
      }

      .price-repeat {
        font-size: ${({ theme }) => theme.fontSizes.l6};
        color: ${({ theme }) => theme.colors.dark};
        display: flex;
        align-items: center;

        @media screen and (max-width: 536px) {
          font-size: ${({ theme }) => theme.fontSizes.base};
        }
      }

      .repeat-manage {
        display: flex;
        align-items: center;
        gap: 1rem;

        @media screen and (max-width: 536px) {
          gap: 0;
        }

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

            @media screen and (max-width: 536px) {
              font-size: ${({ theme }) => theme.fontSizes.base};
            }
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

export const ContainerEmpty = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max(333px, 50%);
  margin-inline: auto;

  ${({ theme }) => css`
    h2 {
      font-size: ${theme.fontSizes.l4};
      margin-bottom: 1rem;
    }

    p {
      font-size: ${theme.fontSizes.base};
      color: ${theme.colors.secondary};
      margin-bottom: 1.5rem;
    }

    h2,
    p {
      color: ${theme.colors.dark};
      text-align: center;
    }

    a {
      font-size: ${theme.fontSizes.l6};
      width: clamp(150px, 50%, 300px);
    }
  `}
`;
