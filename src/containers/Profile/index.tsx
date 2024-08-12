import { useUserContext } from '../../contexts/user';

import Register from './Register';
import UserOptions from './UserOptions';

export default function Profile() {
  const { user, setUser, userLSLoaded } = useUserContext();

  console.log(userLSLoaded, user);

  return userLSLoaded && user.isLoggedIn ? <UserOptions /> : userLSLoaded && <Register setUser={setUser} />;
}
