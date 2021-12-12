import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ChakraProvider } from "@chakra-ui/react";

const App = ({
  Component, 
  pageProps, 
  router 
}: AppProps): JSX.Element => {
  console.log(router.pathname);
  return (
    <ChakraProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default App;