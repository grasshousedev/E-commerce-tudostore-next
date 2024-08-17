import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.main`
  margin-inline: auto;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > section {
    max-width: 676px;
    width: 100%;
  }
`;

export const ContainerCard = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.l6};

  & + & {
    margin-top: 0.5rem;
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    ${({ theme }) => css`
      color: ${theme.colors.placeholder}80;
    `}
  }

  & > div.check {
    width: 18px;
    height: 18px;

    svg {
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;
