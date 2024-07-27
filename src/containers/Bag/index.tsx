import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useBagContext } from '../../contexts/bag';

import { jsonFetch } from '../../utils/jsonFetch';
import { convertToBRL } from '../../utils/convertPriceBRL';
import { getRatingStars } from '../../utils/convertRatingToStars';

import { Container, BagItems, BagItem } from './styled';

export type BagItemDataProtocol = {
  id: number;
  repeat: number;
  thumbnail: string;
  title: string;
  rating: number;
  brand: string;
  price: number;
};

const ContainerBagItem = ({
  /* id, */ repeat,
  thumbnail,
  title,
  rating,
  brand,
  price,
}: BagItemDataProtocol) => {
  return (
    <BagItem>
      <div className="left-container">
        <Image src={thumbnail} alt={`Imagem do produto ${title}`} width={200} height={200} />
      </div>
      <div className="right-container">
        <h2>{title}</h2>
        <span className="brand">{brand}</span>
        <span className="rating">{getRatingStars(rating)}</span>
        <span className="price-repeat">
          {convertToBRL(price)} x {repeat}
        </span>
      </div>
    </BagItem>
  );
};

const ContainerBagItems = () => {
  const [bagData, setBagData] = useState<BagItemDataProtocol[]>([]);
  const { bagItems } = useBagContext();

  useEffect(() => {
    const requestBagData = async () => {
      const items: BagItemDataProtocol[] = [];
      for (let i = 0; i < bagItems.length; i++) {
        const data = await jsonFetch(
          `https://dummyjson.com/products/${encodeURIComponent(bagItems[i].id)}`,
          'select=rating,brand,price',
        );
        items.push({
          id: bagItems[i].id,
          repeat: bagItems[i].repeat,
          thumbnail: bagItems[i].thumbnail,
          title: bagItems[i].title,
          rating: data.rating,
          brand: data.brand,
          price: data.price,
        });
      }
      setBagData(items);
    };
    requestBagData();
  }, [bagItems]);

  console.log(bagData);

  return (
    <BagItems>
      {bagData.map((item) => (
        <ContainerBagItem
          key={item.id}
          id={item.id}
          repeat={item.repeat}
          thumbnail={item.thumbnail}
          title={item.title}
          rating={item.rating}
          brand={item.brand}
          price={item.price}
        />
      ))}
    </BagItems>
  );
};

export default function Bag() {
  return (
    <Container>
      <h1>Veja os items da sua bolsa</h1>
      <ContainerBagItems />
    </Container>
  );
}
