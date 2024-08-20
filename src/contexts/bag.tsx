import { createContext, useContext, useEffect, useState } from 'react';

import { getLSItem, setLSItem } from '../services/localStorage';
import { jsonFetch } from '../utils/jsonFetch';

export type BagItemProtocol = {
  id: number;
  title: string;
  repeat: number;
  thumbnail: string;
};

export type BagItemDataProtocol = {
  id: number;
  repeat: number;
  thumbnail: string;
  title: string;
  rating: number;
  brand: string;
  price: number;
};

export type BagItemDataResponse = {
  rating: number;
  brand: string;
  price: number;
};

export type ContextType = {
  bagItems: BagItemProtocol[];
  setBagItems: React.Dispatch<React.SetStateAction<BagItemProtocol[]>>;
  bagTotal: number;
  bagData: BagItemDataProtocol[];
  LSLoaded: boolean;
};

const defaultContextValue: ContextType = {
  bagItems: [],
  setBagItems: () => {},
  bagTotal: 0,
  bagData: [],
  LSLoaded: false,
};

const Context = createContext<ContextType>(defaultContextValue);

export type BagProviderProps = {
  children: React.ReactNode;
};

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bagItems, setBagItems] = useState<BagItemProtocol[]>(defaultContextValue.bagItems);
  const [bagTotal, setBagTotal] = useState<number>(defaultContextValue.bagTotal);
  const [bagData, setBagData] = useState<BagItemDataProtocol[]>(defaultContextValue.bagData);
  const [LSLoaded, setLSLoaded] = useState(defaultContextValue.LSLoaded);

  const [canRequest, setCanRequest] = useState(true);
  const [runnedFuncRequest, setRunnedFuncRequest] = useState(false);

  useEffect(() => {
    setBagItems(getLSItem('bag') || []);
    setLSLoaded(true);
  }, []);

  useEffect(() => {
    setLSItem('bag', bagItems);
  }, [bagItems]);

  useEffect(() => {
    if (bagItems.length < bagData.length) {
      const items = bagData.filter((item) => {
        if (bagItems.findIndex((iItem) => iItem.id === item.id) !== -1) {
          return true;
        }
        return false;
      });
      setBagData(items);
      setCanRequest(false);
    } else if (bagItems.length === bagData.length) {
      const items = bagData.map((item, i) => {
        item.repeat = bagItems[i].repeat;
        return item;
      });
      setBagData(items);
      setCanRequest(false);
    } else if (bagItems.length > bagData.length) {
      setCanRequest(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bagItems]);

  const requestBagData = async () => {
    if (bagItems.length === 0) return;
    const items: BagItemDataProtocol[] = [];
    for (let i = 0; i < bagItems.length; i++) {
      try {
        const { response, json: data }: { response: Response; json: BagItemDataResponse } = await jsonFetch(
          `https://dummyjson.com/products/${encodeURIComponent(bagItems[i].id)}`,
          'select=rating,brand,price',
          true,
        );
        if (response.status === 200) {
          items.push({
            id: bagItems[i].id,
            repeat: bagItems[i].repeat,
            thumbnail: bagItems[i].thumbnail,
            title: bagItems[i].title,
            rating: data.rating,
            brand: data.brand,
            price: data.price,
          });
        } else if (response.status === 404) {
          console.error(`Product not found: ${bagItems[i].id}`);
          setBagItems(bagItems.filter((item) => item.id !== bagItems[i].id));
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        return;
      }
    }
    setBagData(items);
    setRunnedFuncRequest(true);
  };

  useEffect(() => {
    if (canRequest) requestBagData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRequest, bagItems]);

  useEffect(() => {
    if (!runnedFuncRequest) requestBagData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runnedFuncRequest]);

  useEffect(() => {
    const total = bagData.reduce((acc, item) => acc + item.price * item.repeat, 0);
    setBagTotal(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bagData]);

  return (
    <Context.Provider value={{ bagItems, setBagItems, bagTotal, bagData, LSLoaded }}>
      {children}
    </Context.Provider>
  );
};

export function useBagContext() {
  return useContext(Context);
}
