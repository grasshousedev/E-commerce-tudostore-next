import styled, { css } from 'styled-components';

export const ContainerCard = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l6};

  & > div + div {
    margin-top: 0.5rem;
  }

  div {
    display: flex;
    gap: 0.5rem;

    ${({ theme }) => css`
      color: ${theme.colors.placeholder}80;
    `}

    span {
      font-size: inherit;
    }

    span.no-wrap {
      white-space: nowrap;
      overflow: hidden;
      max-width: 200px;
      text-overflow: ellipsis;
    }

    span,
    svg {
      color: inherit;
    }
  }
`;
