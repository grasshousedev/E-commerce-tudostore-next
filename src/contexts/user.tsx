import { createContext, useContext, useEffect, useState } from 'react';

import { getLSItem, setLSItem } from '../services/localStorage';

import { validationGeral } from '../utils/validationUser';

export type UserProtocol = {
  isLoggedIn: boolean;
  email: string;
  password: string;
};

export type ContextType = {
  user: UserProtocol;
  setUser: React.Dispatch<React.SetStateAction<UserProtocol>>;
  useLSLoaded: boolean;
};

const defaultContextValue: ContextType = {
  user: { isLoggedIn: false, email: '', password: '' },
  setUser: () => {},
  useLSLoaded: false,
};

const Context = createContext<ContextType>(defaultContextValue);

export type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProtocol>(defaultContextValue.user);
  const [useLSLoaded, setLSLoaded] = useState(false);

  useEffect(() => {
    setUser(getLSItem('user') || user);
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
        typeof obj.password === 'string'
      );
    };

    !validateUser(user) && setUser(defaultContextValue.user);
    user.isLoggedIn &&
      validationGeral(user.email, user.password).length > 0 &&
      setUser(defaultContextValue.user);
  }, [user]);

  useEffect(() => {
    setLSItem('user', user);
  }, [user]);

  return <Context.Provider value={{ user, setUser, useLSLoaded }}>{children}</Context.Provider>;
};

export function useUserContext() {
  return useContext(Context);
}
