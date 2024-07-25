import Image from 'next/image';

import { BagItemProtocol, useBagContext } from '../../contexts/bag';

import { Container, BagItem, BagItems } from './styled';

export type BagProductMinimalPartial = Partial<BagItemProtocol>;

export type BagItemsProps = {
  bagItems: BagItemProtocol[];
};

export type BagItemProps = BagProductMinimalPartial & {
  useImage?: boolean;
  className?: string;
};

const BagItemComponent = ({
  id,
  thumbnail,
  title,
  repeat,
  useImage = true,
  className = '',
}: BagItemProps) => {
  return (
    <BagItem className={className} href={`/product/${id}`}>
      {useImage && <Image src={thumbnail} alt={`Produto ${title} da sacola`} width={80} height={80} />}
      <span>x{repeat}</span>
    </BagItem>
  );
};

const BagItemsComponent = ({ bagItems }: BagItemsProps) => {
  return (
    <BagItems className="bag-items">
      {bagItems.length > 0 &&
        bagItems.map((item) => (
          <BagItemComponent
            key={item.id}
            id={item.id}
            repeat={item.repeat}
            thumbnail={item.thumbnail}
            title={`Produto do carrinho ${item.title}`}
          />
        ))}
    </BagItems>
  );
};

export default function Bag() {
  const { bagItems } = useBagContext();

  return (
    bagItems.length > 0 && (
      <Container>
        <h1>Bolsa</h1>
        <BagItemsComponent bagItems={bagItems} />
      </Container>
    )
  );
}
