import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, LayoutWrapper } from '../styles/global-styles';

import { BagProvider } from '../contexts/bag';
import { UserProvider } from '../contexts/user';

import Menu from '../components/Menu';
import Bag from '../components/Bag';

import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <BagProvider>
        <ThemeProvider theme={theme}>
          <LayoutWrapper>
            <Menu />
            <Component {...pageProps} />
            <Bag />
          </LayoutWrapper>
          <GlobalStyles />
        </ThemeProvider>
      </BagProvider>
    </UserProvider>
  );
}

export default App;
