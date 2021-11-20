import { Flex, Box } from '@chakra-ui/layout';
import { useState, useEffect } from 'preact/hooks';
import { fetcher } from '../../utils/fetcher';
import { Form } from './utils/Form';
import { Md } from './utils/Md';

const initialState = {
  category: '',
  contents: '',
  id: 0,
  is_open: null,
  pub_date: '',
  title: '',
}

export const Post = ({ id }: { id: number }) => {
  const [post, setPost] = useState(initialState);
  const [value, setValue] = useState('');
  const url = `${import.meta.env.VITE_API_URL}/admin/blog/post/${id}`;
  useEffect(() => {
    (async () => {
      const p = await fetcher({
        url,
        method: 'GET',
      });
      setPost(p);
      setValue(p.contents);
    })();
  }, []);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Flex p='30px'>
      <Box w='50%' p='20px'>
        <Form value={value} onChange={handleChange} />
      </Box>
      <Box w='50%' p='20px'>
        <Md text={value} />
      </Box>
    </Flex>
  )
}