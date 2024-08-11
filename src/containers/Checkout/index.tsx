import { useRouter } from 'next/navigation';

import { useUserContext } from '../../contexts/user';

import { Container } from './styled';

export default function Checkout() {
  const router = useRouter();

  const { user, useLSLoaded } = useUserContext();

  if (useLSLoaded && !user.isLoggedIn) {
    router.push(`/profile?redirect=${encodeURIComponent('/checkout')}`);
  }

  return useLSLoaded && user.isLoggedIn && <Container>CHECKOUT</Container>;
}
