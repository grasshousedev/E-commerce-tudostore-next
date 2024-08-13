import { useClosedPage } from '../../hooks/closedPage';

import { Container } from './styled';

export default function Checkout() {
  const { isClosed, LSLoaded } = useClosedPage();

  return LSLoaded && !isClosed && <Container>CHECKOUT</Container>;
}
