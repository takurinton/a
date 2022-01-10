import type { AppProps } from 'next/app';
import { Provider as UrqlProvider, createClient } from 'urql';
import { Provider, signIn, signOut, getSession } from 'next-auth/client';
import { ChakraProvider } from "@chakra-ui/react";
import Header from '../src/components/Header';
import { useState } from 'react';
import NextNprogress from 'nextjs-progressbar'

const client = createClient({
  url: 'http://localhost:3001/api',
});

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
      <UrqlProvider value={client}>
        <Provider session={pageProps.session}>
          <NextNprogress color={'#ffffff'} />
          <Header isAdmin={token ? true : false} isStandalone={token ? false : true} signIn={signIn} signOut={signOut} />
          <Component {...pageProps} />
        </Provider>
      </UrqlProvider>
    </ChakraProvider>
  );
}

export default App;