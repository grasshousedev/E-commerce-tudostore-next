import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > section {
    max-width: 676px;
    width: 100%;
  }
`;
