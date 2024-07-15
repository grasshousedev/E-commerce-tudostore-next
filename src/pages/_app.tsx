import { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

const ContainerExample = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ContainerExample>oioi</ContainerExample>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
