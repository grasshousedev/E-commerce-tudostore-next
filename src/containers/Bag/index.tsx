import BagItems from '../../components/BagItems';

import { Container } from './styled';

export default function Bag() {
  return (
    <Container>
      <h1>Veja os items da sua bolsa</h1>
      <BagItems />
    </Container>
  );
}
