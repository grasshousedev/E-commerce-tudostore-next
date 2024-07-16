import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const SearchBar = styled.div`
  width: clamp(200px, 50%, 500px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;

  span.info-search {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.base};
      color: ${({ theme }) => theme.colors.secondary};
    `}
    text-transform: capitalize;
  }

  input {
    height: 52px;
    border-radius: 0.75rem;
    padding-inline: 1.4rem;
    width: 100%;
    margin-top: 0.5rem;
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      font-size: ${theme.fontSizes.l6};
    `}
    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder}80;
    }
  }
`;
