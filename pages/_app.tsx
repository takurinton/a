import type { AppProps } from 'next/app';
import { Provider, signIn, signOut, getSession } from 'next-auth/client';
import { ChakraProvider } from "@chakra-ui/react";
import Header from '../src/components/Header';
import { useState } from 'react';
import NextNprogress from 'nextjs-progressbar'

const App = ({
  Component, 
  pageProps, 
}: AppProps): JSX.Element => {
  const [token, setToken] = useState<string | null>('');

  getSession()
  // @ts-expect-error
    .then(s => s ? setToken(s.token) : setToken(null));
  
  return (
    <ChakraProvider>
      <Provider session={pageProps.session}>
        <NextNprogress color={'#ffffff'}/>
        <Header isAdmin={token ? true: false} isStandalone={token ? false: true} signIn={signIn} signOut={signOut} />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default App;