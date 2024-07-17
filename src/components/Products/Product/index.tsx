import { IoBagAdd } from 'react-icons/io5';

import { convertToBRL } from '../../../utils/convertPriceBRL';

import { ProductMinimalProtocol } from '../../../domain/products/product-protocol';

import { Container, ContainerImg, ContainerInfo } from './styled';

export type ProductProps = ProductMinimalProtocol;

export default function Product({ thumbnail, title, brand, price }: ProductProps) {
  return (
    <Container>
      <ContainerImg className="container-img">
        <img src={thumbnail} alt={title} />
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
  );
}
