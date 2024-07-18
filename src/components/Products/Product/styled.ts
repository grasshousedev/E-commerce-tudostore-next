import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  cursor: pointer;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 232px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.375rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContainerInfo = styled.div`
  padding: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;

  .product-info {
    & > * {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title {
      font-size: ${({ theme }) => theme.fontSizes.l6};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.dark};
    }

    .brand {
      margin-top: 0.5rem;
      ${({ theme }) => css`
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.secondary};
      `}
    }
  }

  .buy-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin-top: 0.5rem;

    .price {
      ${({ theme }) => css`
        color: ${theme.colors.dark};
        font-size: ${({ theme }) => theme.fontSizes.l6};
      `}
    }

    button {
      background-color: ${({ theme }) => theme.colors.dark};
      padding: 0.5rem;
      border-radius: 0.563rem;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
