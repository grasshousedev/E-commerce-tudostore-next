import { createContext, useContext, useEffect, useState } from 'react';

import { getLSItem, setLSItem } from '../services/localStorage';

import { validationGeral } from '../utils/validationUser';

export type UserProtocol = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  password: string;
  userImage: string;
};

export type UserCardProtocol = {
  cardName: string;
  cardNumber: string;
  cvc: string;
  expiryDate: string;
  isDefault: boolean;
};

export type UserAddressProtocol = {
  shippingName: string;
  streetName: string;
  cityName: string;
  stateName: string;
  countryName: string;
};

export type ContextType = {
  user: UserProtocol;
  cards: UserCardProtocol[];
  address: UserAddressProtocol;
  setAddress: React.Dispatch<React.SetStateAction<UserAddressProtocol>>;
  setCards: React.Dispatch<React.SetStateAction<UserCardProtocol[]>>;
  setUser: React.Dispatch<React.SetStateAction<UserProtocol>>;
  LSLoaded: boolean;
};

const defaultContextValue: ContextType = {
  user: { isLoggedIn: false, name: '', email: '', password: '', userImage: '' },
  cards: [],
  address: {
    shippingName: '',
    streetName: '',
    cityName: '',
    stateName: '',
    countryName: '',
  },
  setAddress: () => {},
  setCards: () => {},
  setUser: () => {},
  LSLoaded: false,
};

const Context = createContext<ContextType>(defaultContextValue);

export type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProtocol>(defaultContextValue.user);
  const [cards, setCards] = useState<UserCardProtocol[]>([]);
  const [address, setAddress] = useState<UserAddressProtocol>(defaultContextValue.address);
  const [LSLoaded, setLSLoaded] = useState(false);

  const [canSetAditionals, setCanSetAditionals] = useState(false);

  useEffect(() => {
    setUser(getLSItem('user') || user);
    setCards(getLSItem('cards') || []);
    setAddress(getLSItem('address') || address);
    setLSLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const validateUser = (obj: UserProtocol) => {
      return (
        obj &&
        typeof obj === 'object' &&
        typeof obj.isLoggedIn === 'boolean' &&
        typeof obj.email === 'string' &&
        typeof obj.password === 'string' &&
        typeof obj.userImage === 'string'
      );
    };

    !validateUser(user) && setUser(defaultContextValue.user);
    user.isLoggedIn &&
      validationGeral(user.email, user.password).length > 0 &&
      setUser(defaultContextValue.user);
  }, [user]);

  useEffect(() => {
    const validateCards = (arr: UserCardProtocol[]) => {
      return (
        Array.isArray(arr) &&
        arr.every((card) => {
          return (
            card &&
            typeof card === 'object' &&
            typeof card.cardName === 'string' &&
            typeof card.cardNumber === 'string' &&
            typeof card.cvc === 'string' &&
            typeof card.expiryDate === 'string' &&
            typeof card.isDefault === 'boolean'
          );
        })
      );
    };

    !validateCards(cards) && setCards(defaultContextValue.cards);
  }, [cards]);

  useEffect(() => {
    const validateAddress = (obj: UserAddressProtocol) => {
      return (
        obj &&
        typeof obj === 'object' &&
        typeof obj.shippingName === 'string' &&
        typeof obj.streetName === 'string' &&
        typeof obj.cityName === 'string' &&
        typeof obj.stateName === 'string' &&
        typeof obj.countryName === 'string'
      );
    };

    !validateAddress(address) && setAddress(defaultContextValue.address);
  }, [address]);

  useEffect(() => {
    if (user.isLoggedIn) setCanSetAditionals(true);
  }, [user]);

  useEffect(() => {
    setLSItem('user', user);
  }, [user]);

  useEffect(() => {
    if (canSetAditionals) setLSItem('cards', cards);
  }, [canSetAditionals, cards]);

  useEffect(() => {
    if (canSetAditionals) setLSItem('address', address);
  }, [canSetAditionals, address]);

  return (
    <Context.Provider value={{ user, setUser, cards, setCards, address, setAddress, LSLoaded }}>
      {children}
    </Context.Provider>
  );
};

export function useUserContext() {
  return useContext(Context);
}
