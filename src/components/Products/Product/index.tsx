import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IoBagAdd } from 'react-icons/io5';

import { useBagContext } from '../../../contexts/bag';

import { checkSmallScrenAndShowMsg, useSmallScreenToastMsg } from '../../../hooks/smallScreenToastMsg';

import { convertToBRL } from '../../../utils/convertPriceBRL';

import { ProductMinimalProtocol } from '../../../domain/products/product-protocol';

import { Container, ContainerImg, ContainerInfo } from './styled';

export type ProductProps = ProductMinimalProtocol;

export default function Product({ id, thumbnail, title, brand, price }: ProductProps) {
  const { bagItems, setBagItems } = useBagContext();
  const { isSmallScreen } = useSmallScreenToastMsg();

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToBag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let itemFinded = false;
    const bagItemModified = bagItems.map((item) => {
      if (item.id === id) {
        itemFinded = true;
        item.repeat = item.repeat + 1;
        return item;
      }
      return item;
    });
    if (itemFinded) {
      setBagItems(bagItemModified);
      checkSmallScrenAndShowMsg(isSmallScreen, thumbnail, 'Item adicionado');
      return;
    }
    setBagItems([...bagItems, { id, title, repeat: 1, thumbnail }]);
    checkSmallScrenAndShowMsg(isSmallScreen, thumbnail, 'Novo item adicionado');
  };

  return (
    <Link href="/product/[id]" as={`/product/${id}`} passHref legacyBehavior>
      <Container>
        <ContainerImg className={`container-img ${!imageLoaded ? 'load-animation' : ''}`}>
          <Image
            src={thumbnail}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              visibility: imageLoaded ? 'visible' : 'hidden',
            }}
            onLoad={() => setImageLoaded(true)}
          />
        </ContainerImg>
        <ContainerInfo>
          <div className="product-info">
            <span className="title">{title}</span>
            <span className="brand">{brand}</span>
          </div>
          <div className="buy-info">
            <span className="price">{convertToBRL(price)}</span>
            <button type="button" onClick={handleAddToBag}>
              <IoBagAdd />
            </button>
          </div>
        </ContainerInfo>
      </Container>
    </Link>
  );
}
