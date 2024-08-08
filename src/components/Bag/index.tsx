import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { IoBagHandle } from 'react-icons/io5';

import { focusPages } from '../../config/focusPages';

import { BagItemProtocol, useBagContext } from '../../contexts/bag';

import { convertToBRL } from '../../utils/convertPriceBRL';

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
  const pathname = usePathname();

  const { bagItems, bagTotal } = useBagContext();

  const inBag = pathname === '/bag' ? true : false;
  const inFocusPage = focusPages.bagComponent.includes(pathname);

  return (
    !inFocusPage &&
    bagItems.length > 0 && (
      <Container>
        <h1>Bolsa</h1>
        <BagItemsComponent bagItems={bagItems} />
        {inBag && (
          <div className="total">
            <span>Total:</span>
            <span>{convertToBRL(bagTotal)}</span>
          </div>
        )}
        <Button
          className={`link-bag ${inBag ? 'mt-2' : ''}`}
          buttonType="link"
          href={inBag ? '/checkout' : '/bag'}
        >
          <IoBagHandle />
          <span>{inBag ? 'Comprar' : 'Ver Sacola'}</span>
        </Button>
      </Container>
    )
  );
}
