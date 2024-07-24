import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useBagContext } from '../../contexts/bag';

import { convertBagToObjectData } from '../../utils/convertBagToObjectData';

import { Container } from './styled';

export type BagProductMinimal = {
  id: number;
  thumbnail: string;
  title: string;
  repeat: number;
};

export default function Bag() {
  const [bagData, setBagData] = useState<BagProductMinimal[]>([]);
  const { bagItems } = useBagContext();

  useEffect(() => {
    const requestBagItems = async () => {
      const items = [];
      for (const bagItem of convertBagToObjectData(bagItems)) {
        const response = await fetch(`https://dummyjson.com/products/${bagItem.id}?select=thumbnail,title`);
        const product = await response.json();
        items.push({ ...product, repeat: bagItem.repeat });
      }

      setBagData(items);
    };

    if (bagItems.length > 0) {
      requestBagItems();
    }
  }, [bagItems]);

  return (
    bagItems.length > 0 && (
      <Container>
        <h1>Bolsa</h1>
        <div className="bag-items">
          {bagData.length > 0 &&
            bagData.map((item) => (
              <div key={item.id} className="item">
                <Image src={item.thumbnail} alt={`Produto ${item.title} da sacola`} width={80} height={80} />
                <span>x{item.repeat}</span>
              </div>
            ))}
        </div>
      </Container>
    )
  );
}
