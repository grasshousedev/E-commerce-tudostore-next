import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin-top: 1.125rem;

  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.2rem;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0rem;
  }
`;
