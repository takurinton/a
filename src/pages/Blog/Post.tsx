import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/layout';
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

export const Post = () => {
  const { id } = useParams<string>();
  const [post, setPost] = useState(initialState);
  const [state, setState] = useState(initialState);
  const url = `${import.meta.env.VITE_API_URL}/admin/blog/post/${id}`;
  useEffect(() => {
    (async () => {
      const p = await fetcher({
        url,
        method: 'GET',
      });
      setPost(p);
      setState(p);
    })();
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  return (
    <>
    <Flex p='30px'>
      <Box w='50%' p='20px'>
        <Form value={state.contents} onChange={onChange} />
      </Box>
      <Box w='50%' p='20px'>
        <Md title={state.title} text={state.contents} />
      </Box>
    </Flex>
    </>
  )
}