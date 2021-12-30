import type { AppProps } from 'next/app';
import { Provider, useSession, signIn, signOut, getSession } from 'next-auth/client';
import { ChakraProvider } from "@chakra-ui/react";
import Header from '../src/components/Header';
import { useState } from 'react';

const App = ({
  Component, 
  pageProps, 
  router 
}: AppProps): JSX.Element => {
  const [token, setToken] = useState('');

  getSession()
  // @ts-ignore
    .then(s => setToken(s.token));
  
  return (
    <ChakraProvider>
      <Provider session={pageProps.session}>
        <Header isAdmin={token ? true: false} isStandalone={token ? false: true} signIn={signIn} signOut={signOut} />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default App;