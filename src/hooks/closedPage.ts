import { useRouter } from 'next/router';
import { useUserContext } from '../contexts/user';

export const useClosedPage = (redirect?: string) => {
  const router = useRouter();

  const { user, LSLoaded } = useUserContext();
  const isClosed = !user.isLoggedIn;

  if (LSLoaded && isClosed) {
    router.push(`/profile${redirect ? `?redirect=${encodeURIComponent(redirect)}` : ''}`);
  }

  return { isClosed, LSLoaded };
};
