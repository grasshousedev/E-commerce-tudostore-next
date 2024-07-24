import Link from 'next/link';
import React, { useState } from 'react';

import { IoBagAdd } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';

import { useBagContext } from '../../contexts/bag';

import { useWaitImageLoad } from '../../hooks/waitImageLoad';
import { useUserScrolled } from '../../hooks/userScrolled';

import { convertToBRL } from '../../utils/convertPriceBRL';
import { getRatingStars } from '../../utils/convertRatingToStars';
import { convertNumberDecimals } from '../../utils/convertNumberDecimals';
import { convertDate } from '../../utils/convertReviewDate';

import Button from '../../components/Button';

import { ProductProtocol } from '../../domain/products/product-protocol';

import { Container, ContainerTop, ContainerGallery, ContainerMainInfos, ContainerBottom } from './styled';

export type ProductPageProps = {
  product: ProductProtocol;
};

export default function Product({ product }: ProductPageProps) {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const { bagItems, setBagItems } = useBagContext();
  const { userScrolled } = useUserScrolled();
  const { imagesLoaded } = useWaitImageLoad(product.images);

  const handleSelectImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImg(e.target.value);
  };

  const handleAddToBag = (id: number) => {
    setBagItems([...bagItems, id]);
  };

  return (
    <Container>
      <Link
        className={`back-link ${userScrolled ? 'float-style' : ''}`}
        href="#"
        onClick={() => history.back()}
      >
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
                  className={`label-option ${selectedImg === img ? 'on' : ''} ${!imagesLoaded ? 'load-animation' : ''}`}
                  htmlFor={`gallery-img-${i}`}
                >
                  {imagesLoaded && <img src={img} alt={`Imagem do produto ${product.title}`} />}
                </label>
              </React.Fragment>
            ))}
          </div>
          <div className={`main-img ${!imagesLoaded ? 'load-animation' : ''}`}>
            {imagesLoaded &&
              product.images.map(
                (img, i) => img === selectedImg && <img key={i} src={img} alt={product.title} />,
              )}
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
            <Button onClick={() => handleAddToBag(product.id)}>
              <IoBagAdd />
              <span>Adicionar ao carrinho</span>
            </Button>
          </div>
        </ContainerMainInfos>
      </ContainerTop>
      <ContainerBottom>
        <h2>Avaliações</h2>
        <div className="container-reviews">
          <p>
            Média de <span className="accent">{convertNumberDecimals(product.rating, 1)} de 5</span> com um
            total de <span className="accent">{product.reviews.length}</span> avaliações
          </p>
          <div className="container-items">
            {product.reviews.map((review, i) => (
              <div key={i} className="review-item">
                <div className="stars">{getRatingStars(review.rating)}</div>
                <p className="created-by-date">
                  <span className="review-date">{convertDate(review.date)}</span>
                  <span className="author">{review.reviewerName}</span>
                </p>
                <p className="comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </ContainerBottom>
    </Container>
  );
}
