import Link from 'next/link';
import { useState } from 'react';

import { IoBagAdd } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';

import { ProductProtocol } from '../../domain/products/product-protocol';

import Button from '../../components/Button';

import { Container, ContainerTop, ContainerGallery, ContainerMainInfos } from './styled';

export type ProductPageProps = {
  product: ProductProtocol;
};

export default function Product({ product }: ProductPageProps) {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  const handleSelectImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImg(e.target.value);
  };

  return (
    <Container>
      <Link className="back-link" href="javascript:history.back()">
        <IoIosArrowBack />
        <span>Voltar</span>
      </Link>
      <ContainerTop>
        <ContainerGallery>
          <div className="gallery">
            {product.images.map((img, i) => (
              <>
                <div key={i} className="wrapper-option">
                  <input
                    type="radio"
                    name="selector-img"
                    id={`gallery-img-${i}`}
                    value={img}
                    checked={selectedImg === img}
                    onChange={handleSelectImg}
                  />
                </div>
                <label className="label-option" htmlFor={`gallery-img-${i}`}>
                  <img src={img} alt={`Imagem do produto ${product.title}`} />
                </label>
              </>
            ))}
          </div>
          <div className="main-img">
            <img src={selectedImg} alt={product.title} />
          </div>
        </ContainerGallery>
        <ContainerMainInfos>
          <div className="container-top">
            <h1>{product.title}</h1>
            <span>{product.brand}</span>
          </div>
          <div className="container-bottom">
            <span className="rating">{product.rating}</span>
            <span className="price">{product.price}</span>
            <p className="description">{product.description}</p>
            <Button>
              <IoBagAdd />
              <span>Adicionar ao carrinho</span>
            </Button>
          </div>
        </ContainerMainInfos>
      </ContainerTop>
    </Container>
  );
}
