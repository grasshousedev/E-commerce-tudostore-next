import { createContext, useContext, useEffect, useState } from 'react';

import { getLSItem, setLSItem } from '../services/localStorage';

type ContextType = {
  bagItems: number[];
  setBagItems: React.Dispatch<React.SetStateAction<number[]>>;
};

const defaultContextValue: ContextType = {
  bagItems: [],
  setBagItems: () => {},
};

const Context = createContext<ContextType>(defaultContextValue);

export type BagProviderProps = {
  children: React.ReactNode;
};

export const BagProvider = ({ children }: BagProviderProps) => {
  const [bagItems, setBagItems] = useState<number[]>([]);

  useEffect(() => {
    setBagItems(getLSItem('bag') || []);
  }, []);

  useEffect(() => {
    setLSItem('bag', bagItems);
  }, [bagItems]);

  return <Context.Provider value={{ bagItems, setBagItems }}>{children}</Context.Provider>;
};

export function useBagContext() {
  return useContext(Context);
}
