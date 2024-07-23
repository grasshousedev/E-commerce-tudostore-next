import Link from 'next/link';
import Image from 'next/image';

import { IoBagAdd } from 'react-icons/io5';

import { useWaitImageLoad } from '../../../hooks/waitImageLoad';

import { convertToBRL } from '../../../utils/convertPriceBRL';

import { ProductMinimalProtocol } from '../../../domain/products/product-protocol';

import { Container, ContainerImg, ContainerInfo } from './styled';

export type ProductProps = ProductMinimalProtocol;

export default function Product({ id, thumbnail, title, brand, price }: ProductProps) {
  const { imagesLoaded } = useWaitImageLoad([thumbnail]);

  return (
    <Link href="/product/[id]" as={`/product/${id}`} passHref legacyBehavior>
      <Container>
        <ContainerImg className={`container-img ${!imagesLoaded ? 'load-animation' : ''}`}>
          {imagesLoaded && (
            <Image
              src={thumbnail}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          )}
        </ContainerImg>
        <ContainerInfo>
          <div className="product-info">
            <span className="title">{title}</span>
            <span className="brand">{brand}</span>
          </div>
          <div className="buy-info">
            <span className="price">{convertToBRL(price)}</span>
            <button>
              <IoBagAdd />
            </button>
          </div>
        </ContainerInfo>
      </Container>
    </Link>
  );
}
