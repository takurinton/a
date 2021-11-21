import Router, { Route } from 'preact-router';
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home';
import Login from "./pages/Login";
import { Posts, Post } from './pages/Blog';
import { New } from './pages/Blog/New';
import Header from './components/Header';
import { getToken } from './utils/getToken';

export function App() {
  const isAdmin = getToken() ? true: false;
  if (!isAdmin) history.pushState('', '', '/login');
  return (
    <ChakraProvider>
      <Header isAdmin={isAdmin}/>
      {/* @ts-ignore */}
      <Router>
        <Route path='/' component={Home} />
        <Route path='/blog' component={Posts} />
        <Route path='/blog/:id' component={Post} />
        <Route path='/blog/new' component={New} />
        <Route path='/login' component={() => <Login isAdmin={isAdmin} />}/>
      </Router>
    </ChakraProvider>
  );
};
