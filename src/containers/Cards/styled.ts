import styled from 'styled-components';

export const Container = styled.main`
  margin-inline: auto;
  margin-bottom: 2rem;
  max-width: 676px;

  section ~ section {
    margin-top: 2rem;
  }
`;
