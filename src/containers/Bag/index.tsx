import Image from 'next/image';

import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

import { BagItemDataProtocol, useBagContext } from '../../contexts/bag';

import Button from '../../components/Button';

import { convertToBRL } from '../../utils/convertPriceBRL';
import { getRatingStars } from '../../utils/convertRatingToStars';
import { convertNumberDecimals } from '../../utils/convertNumberDecimals';

import { Container, BagItems, BagItem, BagItemAnimated, ContainerEmpty } from './styled';

const ContainerBagItem = ({ id, repeat, thumbnail, title, rating, brand, price }: BagItemDataProtocol) => {
  const { bagItems, setBagItems } = useBagContext();

  const handleDecreaseItem = () => {
    const itemIndex = bagItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) return;
    const updatedBagItems = [...bagItems];
    if (updatedBagItems[itemIndex].repeat === 1) {
      updatedBagItems.splice(itemIndex, 1);
    } else {
      updatedBagItems[itemIndex].repeat -= 1;
      updatedBagItems[itemIndex].repeat = Math.max(updatedBagItems[itemIndex].repeat, 1);
    }
    setBagItems(updatedBagItems);
  };

  const handleIncreaseItem = () => {
    const itemIndex = bagItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      setBagItems([...bagItems, { id, title, repeat, thumbnail }]);
    } else {
      const updatedBagItems = [...bagItems];
      updatedBagItems[itemIndex].repeat += 1;
      setBagItems(updatedBagItems);
    }
  };

  return (
    <BagItem>
      <div className="left-container">
        <Image src={thumbnail} alt={`Imagem do produto ${title}`} width={200} height={200} />
      </div>
      <div className="right-container">
        <div className="container-top">
          <h2>{title}</h2>
          <span className="brand">{brand}</span>
          <span className="rating">
            <div className="stars">{getRatingStars(rating)}</div>
            <span className="rating-number">{convertNumberDecimals(rating, 1)}/5</span>
          </span>
        </div>
        <div className="container-bottom">
          <span className="price-repeat">
            {convertToBRL(price)} x {repeat}
          </span>
          <div className="repeat-manage">
            <button type="button" onClick={handleDecreaseItem}>
              <HiOutlineMinus />
            </button>
            <span className="repeat-number">{repeat}</span>
            <button type="button" onClick={handleIncreaseItem}>
              <HiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </BagItem>
  );
};

const ContainerBagItems = () => {
  const { bagItems, bagData, LSLoaded } = useBagContext();

  return (
    <>
      <BagItems className={LSLoaded && bagItems.length === 0 ? 'hide' : ''}>
        {bagData.length > 0 &&
          bagData.map((item) => (
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
        {bagData.length === 0 &&
          bagItems.map((_, i) => <BagItemAnimated key={i} className="load-animation" />)}
      </BagItems>
      {LSLoaded && bagItems.length === 0 && (
        <ContainerEmpty>
          <h2>Parece que sua bolsa está vázia</h2>
          <p>
            Adicione produtos ao seu carrinho para começar a comprar e visualizar as suas compras futuras.
          </p>
          <Button href="/" buttonType="link">
            Ir para o início
          </Button>
        </ContainerEmpty>
      )}
    </>
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
