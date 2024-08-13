import { useUserContext } from '../contexts/user';

export const useClosedPage = () => {
  const { user, LSLoaded } = useUserContext();
  const isClosed = !user.isLoggedIn;

  return { isClosed, LSLoaded };
};
