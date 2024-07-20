import Link from 'next/link';
import React, { useState } from 'react';

import { IoBagAdd } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';

import { convertToBRL } from '../../utils/convertPriceBRL';
import { getRatingStars } from '../../utils/convertRatingToStars';
import { convertNumberDecimals } from '../../utils/convertNumberDecimals';

import Button from '../../components/Button';

import { ProductProtocol } from '../../domain/products/product-protocol';

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
      <Link className="back-link" href="#" onClick={() => history.back()}>
        <IoIosArrowBack />
        <span>Voltar</span>
      </Link>
      <ContainerTop>
        <ContainerGallery>
          <div className="gallery">
            {product.images.map((img, i) => (
              <React.Fragment key={i}>
                <input
                  type="radio"
                  name="selector-img"
                  id={`gallery-img-${i}`}
                  className="input-radio"
                  value={img}
                  checked={selectedImg === img}
                  onChange={handleSelectImg}
                />
                <label
                  className={`label-option ${selectedImg === img ? 'on' : ''}`}
                  htmlFor={`gallery-img-${i}`}
                >
                  <img src={img} alt={`Imagem do produto ${product.title}`} />
                </label>
              </React.Fragment>
            ))}
          </div>
          <div className="main-img">
            <img src={selectedImg} alt={product.title} />
          </div>
        </ContainerGallery>
        <ContainerMainInfos>
          <div className="container-top">
            <h1>{product.title}</h1>
            <span className="brand">{product.brand}</span>
          </div>
          <div className="container-bottom">
            <span className="rating">
              <div className="stars">{getRatingStars(product.rating)}</div>
              <span className="rating-number">{convertNumberDecimals(product.rating, 1)}/5</span>
            </span>
            <span className="price">{convertToBRL(product.price)}</span>
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
