import { Box } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { useEffect, useState } from 'preact/hooks';
import { fetcher } from "../../utils/fetcher";

const initialState = [
  {
    category: '',
    contents: '',
    id: 0,
    is_open: null,
    pub_date: '',
    title: '',
  },
]
export const Posts = () => {
  const [posts, setPosts] = useState(initialState);
  const url = `${import.meta.env.VITE_API_URL}/admin/blog`;
  useEffect(() => {
    (async () => {
      const p = await fetcher({
        url,
        method: 'GET',
      });
      setPosts(p);
    })();
  }, []);

  return (
    <Box>
      {
        posts.map(post => (
          <Box p='30px' textAlign='center'>
            <chakra.h1 fontSize='2rem'>{post.title}</chakra.h1>
            <chakra.p>{post.category}</chakra.p>
            <chakra.p>{post.pub_date}</chakra.p>
          </Box>
        ))
      }
    </Box>
  );
}