import { useBagContext } from '../../contexts/bag';

import { Container } from './styled';

export default function Bag() {
  const { bagItems } = useBagContext();

  console.log(bagItems);

  return <Container></Container>;
}
