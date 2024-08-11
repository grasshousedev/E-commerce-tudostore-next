import { useUserContext } from '../../contexts/user';

import Register from './Register';
import UserOptions from './UserOptions';

import { Container } from './styled';

export default function Profile() {
  const { user, setUser, useLSLoaded } = useUserContext();

  return (
    useLSLoaded && <Container>{user.isLoggedIn ? <UserOptions /> : <Register setUser={setUser} />}</Container>
  );
}
