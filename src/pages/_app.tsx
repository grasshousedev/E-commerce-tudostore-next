import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, LayoutWrapper } from '../styles/global-styles';
import { theme } from '../styles/theme';

import Menu from '../components/Menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Menu />
        <Component {...pageProps} />
      </LayoutWrapper>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
