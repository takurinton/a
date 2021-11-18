import Router, { Route } from 'preact-router';
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home';
import Login from "./pages/Login";
import Header from './components/Header';
import { getToken } from './utils/getToken';

export function App() {
  const isAdmin = getToken() ? true: false;
  return (
    <ChakraProvider>
      <Header isAdmin={isAdmin}/>
      <Router>
        <Route path='/' component={Home} />
        <Route path='/login' component={() => <Login isAdmin={isAdmin} />}/>
      </Router>
    </ChakraProvider>
  );
};
