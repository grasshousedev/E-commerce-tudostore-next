import { useClosedPage } from '../../hooks/closedPage';

import { Container } from './styled';

export default function Cards() {
  const { LSLoaded, isClosed } = useClosedPage();

  return LSLoaded && !isClosed && <Container></Container>;
}
