import Image from 'next/image';
import { useState } from 'react';

import { IoBagHandle } from 'react-icons/io5';

import { BagItemProtocol, useBagContext } from '../../contexts/bag';

import Button from '../Button';

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
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <BagItem className={`${className} ${!imageLoaded ? 'load-animation' : ''}`} href={`/product/${id}`}>
      {useImage && (
        <Image
          src={thumbnail}
          alt={`Produto ${title} da sacola`}
          width={80}
          height={80}
          onLoad={() => setImageLoaded(true)}
        />
      )}
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
        <Button className="link-bag" buttonType="link" href="/bag">
          <IoBagHandle />
          <span>Ver Sacola</span>
        </Button>
      </Container>
    )
  );
}
