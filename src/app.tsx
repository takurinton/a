import Router, { Route } from 'preact-router';
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home';
import Login from "./pages/Login";
import Header from './components/Header';

export function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Router>
    </ChakraProvider>
  );
};
