import { 
  BrowserRouter as Router,
  Routes, 
  Route 
} from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/blog'>
            <Posts />
          </Route>
          <Route path='/blog/:id'>
            <Post id={1} />
          </Route>
          <Route path='/blog/new'>
            <New />
          </Route>
          <Route path='/login'>
            <Login isAdmin={isAdmin} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
