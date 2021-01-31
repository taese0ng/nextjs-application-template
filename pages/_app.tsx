import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from 'styles/global-styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Normalize />
    <GlobalStyles />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default App;
