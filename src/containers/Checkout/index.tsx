import { useRouter } from 'next/router';
import { useClosedPage } from '../../hooks/closedPage';

import { Container } from './styled';

export default function Checkout() {
  const router = useRouter();

  const { isClosed, LSLoaded } = useClosedPage();

  if (LSLoaded && isClosed) {
    router.push(`/profile?redirect=${encodeURIComponent('/checkout')}`);
  }

  return LSLoaded && !isClosed && <Container>CHECKOUT</Container>;
}
