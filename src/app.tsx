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
import { Posts as StandalonePosts } from './pages/Standalone/Blog/Posts';
import { Post as StandalonePost } from './pages/Standalone/Blog/Post';
import { New as StandaloneNew } from './pages/Standalone/Blog/New';
import Header from './components/Header';
import { getToken } from './utils/getToken';

const PrivateRoute = () => {
  const isAdmin = getToken() ? true: false;
  const isStandalone = location.pathname.indexOf('standalone') !== -1;
  if (isStandalone) history.pushState('', '', location.pathname);
  else if (!isAdmin) history.pushState('', '', '/login');
  return (
    <BrowserRouter>
      <Header isAdmin={isAdmin} isStandalone={isStandalone} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Posts />} />
        <Route path='/blog/:id' element={<Post />} />
        <Route path='/blog/new' element={<New />} />
        <Route path='/standalone' element={<Home />} />
        <Route path='/standalone/blog' element={<StandalonePosts />} />
        <Route path='/standalone/blog/:id' element={<StandalonePost />} />
        <Route path='/standalone/blog/new' element={<StandaloneNew />} />
        <Route path='/login' element={<Login isAdmin={isAdmin} />} />
      </Routes>
    </BrowserRouter>
  );
};

// const StandaloneRoute = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/standalone' element={<Home />} />
//         <Route path='/standalone/blog' element={<StandalonePosts />} />
//         <Route path='/standalone/blog/:id' element={<StandalonePost />} />
//         <Route path='/standalone/blog/new' element={<New />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export function App() {
  return (
    <ChakraProvider>
      <PrivateRoute />
      {/* <StandaloneRoute /> */}
    </ChakraProvider>
  );
};
