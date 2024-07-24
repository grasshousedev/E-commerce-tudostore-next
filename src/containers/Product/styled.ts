import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;

  a.back-link {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    position: sticky;
    top: 1rem;
    width: fit-content;
    background: transparent;
    transition:
      background-color 0.15s ease-out,
      color 0.1s ease-out;
    box-shadow: 0 0 0 rgb(0, 0, 0);
    border-radius: 0.875rem;

    &.float-style {
      ${({ theme }) => css`
        background-color: ${theme.colors.white};
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
        padding: 0.5rem 1rem;
      `};
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.dark};
    }

    span {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l6};
        color: ${theme.colors.dark};
        font-weight: 400;
      `};
    }
  }
`;

export const ContainerTop = styled.section`
  display: grid;
  grid-template-columns: 0.38fr 0.62fr;
  gap: 2rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 1370px) {
    grid-template-columns: repeat(2, 0.5fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerGallery = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr;
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 55px;
  }

  .gallery {
    @media screen and (max-width: 1000px) {
      grid-row: 2;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .input-radio {
      display: none;
    }

    .label-option {
      display: block;
      background-color: ${({ theme }) => theme.colors.white};
      grid-column: 1;
      height: 55px;
      border-radius: 0.813rem;
      padding: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease-out;

      @media screen and (max-width: 1000px) {
        width: 55px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .label-option.on {
      background-color: ${({ theme }) => theme.colors.primary}CC;
    }

    .label-option ~ .label-option {
      margin-top: 1rem;

      @media screen and (max-width: 1000px) {
        margin-top: unset;
      }
    }
  }

  .main-img {
    min-height: 300px;
    height: 60vh;
    min-width: 300px;
    width: 100%;
    grid-column: 2;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.813rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
      grid-column: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const ContainerMainInfos = styled.div`
  display: flex;
  flex-direction: column;

  .container-top {
    padding: 0.5rem;

    h1 {
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l1};
        color: ${theme.colors.dark};
        font-weight: bold;
      `}
    }
    .brand {
      display: block;
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l4};
        color: ${theme.colors.placeholder}80;
        margin-top: 0.5rem;
      `};
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: column;
    height: 100%;

    .rating {
      padding: 1rem 0.5rem;
      display: flex;
      gap: 1.5rem;

      .stars {
        ${({ theme }) => css`
          color: ${theme.colors.accent[1]};
        `}

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

    .price {
      ${({ theme }) => css`
        color: ${theme.colors.dark};
        font-size: ${theme.fontSizes.l4};
      `}
      font-weight: 500;
    }

    .description {
      padding: 0.5rem;
      margin-bottom: 1rem;
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.l6};
        color: ${theme.colors.dark};
      `}
    }

    & > button {
      align-self: flex-end;
      margin-top: auto;
    }
  }
`;

export const ContainerBottom = styled.section`
  margin-top: 2.5rem;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.placeholder}80;
    margin-bottom: 2rem;
    border-radius: 3rem;
  }

  h2 {
    ${({ theme }) => css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.l4};
      font-weight: 500;
    `}
  }

  .container-reviews {
    margin-bottom: 3rem;
    & > p {
      margin-top: 1.5rem;

      font-size: ${({ theme }) => theme.fontSizes.l5};
      font-weight: 400;

      & > .accent {
        color: ${({ theme }) => theme.colors.accent['1']};
        text-decoration: underline;
      }
    }

    .container-items {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;

      .review-item {
        & > * + * {
          margin-top: 0.25rem;
        }

        & > * + *.comment {
          margin-top: 0.5rem;
        }

        .stars {
          svg {
            width: 1.2rem;
            height: 1.2rem;
          }

          svg + svg {
            margin-left: 0.5rem;
          }
        }
        .created-by-date {
          ${({ theme }) => css`
            font-size: ${theme.fontSizes.base};
            color: ${theme.colors.secondary};
          `}
        }
      }
    }
  }
`;
