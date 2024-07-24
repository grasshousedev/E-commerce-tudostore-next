import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: sticky;
  height: calc(100svh - 4.376rem);
  top: 2.188rem;
  min-width: 250px;
  width: 25%;
  max-width: 300px;
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
`;
