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

export type ContextType = {
  user: UserProtocol;
  setUser: React.Dispatch<React.SetStateAction<UserProtocol>>;
  userLSLoaded: boolean;
};

const defaultContextValue: ContextType = {
  user: { isLoggedIn: false, name: '', email: '', password: '', userImage: '' },
  setUser: () => {},
  userLSLoaded: false,
};

const Context = createContext<ContextType>(defaultContextValue);

export type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProtocol>(defaultContextValue.user);
  const [userLSLoaded, setLSLoaded] = useState(false);

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
    setLSItem('user', user);
  }, [user]);

  return <Context.Provider value={{ user, setUser, userLSLoaded }}>{children}</Context.Provider>;
};

export function useUserContext() {
  return useContext(Context);
}
