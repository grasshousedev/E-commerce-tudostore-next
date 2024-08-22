import { useBagContext } from '../../contexts/bag';

import { convertToBRL } from '../../utils/convertPriceBRL';

import BagItems from '../../components/BagItems';
import Button from '../../components/Button';

import { Container, ContainerSmallScreenResume } from './styled';

export default function Bag() {
  const { bagTotal, bagItems } = useBagContext();

  return (
    <Container>
      <h1>Veja os items da sua bolsa</h1>
      {bagItems.length > 0 && (
        <ContainerSmallScreenResume>
          <span>
            Total: <span className="total">{convertToBRL(bagTotal)}</span>
          </span>
          <Button className="link-bag" buttonType="link" href="/checkout">
            Comprar
          </Button>
        </ContainerSmallScreenResume>
      )}
      <BagItems emptyClassName={bagItems.length === 0 ? 'empty' : ''} />
    </Container>
  );
}
