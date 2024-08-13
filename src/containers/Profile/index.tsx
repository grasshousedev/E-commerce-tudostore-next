import { useUserContext } from '../../contexts/user';

import Register from './Register';
import UserOptions from './UserOptions';

export default function Profile() {
  const { user, setUser, LSLoaded } = useUserContext();

  console.log(LSLoaded, user);

  return LSLoaded && user.isLoggedIn ? <UserOptions /> : LSLoaded && <Register setUser={setUser} />;
}
