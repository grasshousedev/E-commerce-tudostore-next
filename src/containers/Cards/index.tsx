import { useClosedPage } from '../../hooks/closedPage';

import { Container } from './styled';

export default function Cards() {
  const { LSLoaded, isClosed } = useClosedPage('/profile/cards');

  return LSLoaded && !isClosed && <Container></Container>;
}
