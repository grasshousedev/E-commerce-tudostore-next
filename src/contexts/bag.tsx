import { createContext, useContext, useEffect, useState } from 'react';

import { getLSItem, setLSItem } from '../services/localStorage';

export type BagItemProtocol = {
  id: number;
  title: string;
  repeat: number;
  thumbnail: string;
};

export type ContextType = {
  bagItems: BagItemProtocol[];
  setBagItems: React.Dispatch<React.SetStateAction<BagItemProtocol[]>>;
  bagTotal: number;
  setBagTotal: React.Dispatch<React.SetStateAction<number>>;
};

const defaultContextValue: ContextType = {
  bagItems: [],
  setBagItems: () => {},
  bagTotal: 0,
  setBagTotal: () => {},
};

const Context = createContext<ContextType>(defaultContextValue);

export type BagProviderProps = {
  children: React.ReactNode;
};

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bagItems, setBagItems] = useState<BagItemProtocol[]>([]);
  const [bagTotal, setBagTotal] = useState<number>(0);

  useEffect(() => {
    setBagItems(getLSItem('bag') || []);
  }, []);

  useEffect(() => {
    setLSItem('bag', bagItems);
  }, [bagItems]);

  return (
    <Context.Provider value={{ bagItems, setBagItems, bagTotal, setBagTotal }}>{children}</Context.Provider>
  );
};

export function useBagContext() {
  return useContext(Context);
}
