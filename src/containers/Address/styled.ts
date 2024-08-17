import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 1rem);
  height: calc(100svh - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  & > section {
    max-width: 676px;
    width: 100%;
  }
`;
