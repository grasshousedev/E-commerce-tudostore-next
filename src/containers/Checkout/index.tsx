import { useRouter } from 'next/navigation';

import { useUserContext } from '../../contexts/user';

import { Container } from './styled';

export default function Checkout() {
  const router = useRouter();

  const { user, LSLoaded } = useUserContext();

  if (LSLoaded && !user.isLoggedIn) {
    router.push(`/profile?redirect=${encodeURIComponent('/checkout')}`);
  }

  return LSLoaded && user.isLoggedIn && <Container>CHECKOUT</Container>;
}
