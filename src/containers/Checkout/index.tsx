import { useRouter } from 'next/navigation';

import { useUserContext } from '../../contexts/user';

import { Container } from './styled';

export default function Checkout() {
  const router = useRouter();

  const { user, userLSLoaded } = useUserContext();

  if (userLSLoaded && !user.isLoggedIn) {
    router.push(`/profile?redirect=${encodeURIComponent('/checkout')}`);
  }

  return userLSLoaded && user.isLoggedIn && <Container>CHECKOUT</Container>;
}
