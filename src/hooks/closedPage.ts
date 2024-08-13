import { useRouter } from 'next/router';
import { useUserContext } from '../contexts/user';

export const useClosedPage = (redirect: boolean = true) => {
  const router = useRouter();

  const { user, LSLoaded } = useUserContext();
  const isClosed = !user.isLoggedIn;

  if (redirect && LSLoaded && isClosed) {
    router.push(`/profile?redirect=${encodeURIComponent('/checkout')}`);
  }

  return { isClosed, LSLoaded };
};
