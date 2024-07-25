import Link from 'next/link';

import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: sticky;
  height: calc(100svh - 4.376rem);
  top: 2.188rem;
  min-width: 260px;
  width: 35%;
  max-width: 400px;
  padding: 2.031rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0.25rem;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.placeholder}80;
    border-radius: 3rem;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    ${({ theme }) => css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.l3};
    `}
  }

  .link-bag {
    margin-top: 2.625rem;
    width: fit-content;
    margin-inline: auto;
  }
`;

export const BagItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  gap: 1rem;
  justify-content: center;
  margin-top: 1.125rem;
  overflow: auto;
  max-height: 75%;
`;

export const BagItem = styled(Link)`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & > span {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    mix-blend-mode: difference;
    filter: invert(1);
  }
`;
