import styled, { css } from 'styled-components';

export const Container = styled.section`
  margin-top: 3rem;

  a.back-link {
    display: flex;
    gap: 0.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
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

export const ContainerTop = styled.div`
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
`;

export const ContainerGallery = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr;

  .gallery {
    .wrapper-option {
      display: none;
    }

    .label-option {
      display: block;
      background-color: ${({ theme }) => theme.colors.white};
      grid-column: 1;
      height: 55px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .main-img {
    width: 100%;
    grid-column: 2;

    img {
      width: 100%;
    }
  }
`;

export const ContainerMainInfos = styled.div``;
