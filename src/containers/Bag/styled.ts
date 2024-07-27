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

export const BagItems = styled.div``;

export const BagItem = styled.div``;
