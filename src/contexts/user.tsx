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
  cardNumbers: string;
  cvc: number;
  expDate: string;
  isDefault: boolean;
};

export type ContextType = {
  user: UserProtocol;
  cards: UserCardProtocol[];
  setCards: React.Dispatch<React.SetStateAction<UserCardProtocol[]>>;
  setUser: React.Dispatch<React.SetStateAction<UserProtocol>>;
  LSLoaded: boolean;
};

const defaultContextValue: ContextType = {
  user: { isLoggedIn: false, name: '', email: '', password: '', userImage: '' },
  cards: [],
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
  const [LSLoaded, setLSLoaded] = useState(false);

  const [canSetCards, setCanSetCards] = useState(false);

  useEffect(() => {
    setUser(getLSItem('user') || user);
    setCards(getLSItem('cards') || []);
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
            typeof card.cardNumbers === 'string' &&
            typeof card.cvc === 'number' &&
            typeof card.expDate === 'string' &&
            typeof card.isDefault === 'boolean'
          );
        })
      );
    };

    validateCards(cards) && setCards(defaultContextValue.cards);
  }, [cards]);

  useEffect(() => {
    if (user.isLoggedIn) setCanSetCards(true);
  }, [user]);

  useEffect(() => {
    setLSItem('user', user);
  }, [user]);

  useEffect(() => {
    if (canSetCards) setLSItem('cards', cards);
  }, [canSetCards, cards]);

  return <Context.Provider value={{ user, setUser, cards, setCards, LSLoaded }}>{children}</Context.Provider>;
};

export function useUserContext() {
  return useContext(Context);
}
