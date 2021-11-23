import React from 'react';
import { 
  BrowserRouter,
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
      <BrowserRouter>
        <Header isAdmin={isAdmin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Posts />} />
          <Route path='/blog/:id' element={<Post />} />
          <Route path='/blog/new' element={<New />} />
          <Route path='/login' element={<Login isAdmin={isAdmin} />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
