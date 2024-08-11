import { useUserContext } from '../../contexts/user';

import Register from './Register';
import UserOptions from './UserOptions';

export default function Profile() {
  const { user, setUser, useLSLoaded } = useUserContext();

  return useLSLoaded && user.isLoggedIn ? <UserOptions /> : <Register setUser={setUser} />;
}
