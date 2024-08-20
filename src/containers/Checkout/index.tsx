import { useClosedPage } from '../../hooks/closedPage';

import AddressCard from '../../components/AddressCard';
import CardCard from '../../components/CardCard';

import { Container, ContainerResume } from './styled';
import Button from '../../components/Button';
import { useBagContext } from '../../contexts/bag';

export default function Checkout() {
  const { isClosed, LSLoaded } = useClosedPage('/checkout');
  const { bagItems } = useBagContext();

  console.log(bagItems);

  return (
    LSLoaded &&
    !isClosed && (
      <Container>
        <section className="left-container">
          <AddressCard className="m-border-radius" />
          <CardCard className="m-border-radius" />
        </section>
        <section className="right-content">
          <ContainerResume>
            <header>
              <h1>Resumo da Ordem</h1>
            </header>
            <div className="order-infos">
              <span></span>
            </div>
            <div className="order-total">Total: {}</div>
            <Button>Finalizar Ordem</Button>
          </ContainerResume>
        </section>
      </Container>
    )
  );
}
