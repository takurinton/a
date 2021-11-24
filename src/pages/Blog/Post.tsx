import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/layout';
import { fetcher } from '../../utils/fetcher';
import { Form } from './utils/Form';
import { Md } from './utils/Md';
import { Button } from '@chakra-ui/button';

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
  const [state, setState] = useState(initialState);
  const [categories, setCategories] = useState({ category: [{ id: 0, name: '' }]});
  const purl = `${import.meta.env.VITE_API_URL}/admin/blog/post/${id}`;
  const curl = `${import.meta.env.VITE_API_URL}/admin/blog/category`;
  useEffect(() => {
    (async () => {
      const p = await fetcher({
        url: purl,
        method: 'GET',
      });
      const c = await fetcher({
        url: curl,
        method: 'GET',
      })
      setState({ ...p, category: '' });
      setCategories(c);
    })();
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ ...state, [event.target.name]: event.target.value })
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    // PATCH にする
    // console.log('on submit');
    // (async () => await fetcher({
    //   url: 'https://api.takurinton.com/admin/blog',
    //   _body: JSON.stringify(state),
    //   method: 'POST'
    // })
    // .then(res => {
    //   if (res.status !== 201) {
    //     console.log('error');
    //   };
    //   window.history.pushState('', '', '/blog');
    // }))();
  };

  return (
    <PostRenderer state={state} categories={categories} onChange={onChange} onSubmit={onSubmit} />
  )
}

export const PostRenderer = ({ 
  state, 
  categories,
  onChange,
  onSubmit,
}: { 
  state: any; 
  categories: { category: { id: number, name: string }[]};
  onChange: (value: any) => void;
  onSubmit: () => void;
}) => {
  return (
    <>
      <Flex p='30px'>
        <Box w='50%' p='20px'>
          <Form state={state} categories={categories} onChange={onChange} onSubmit={onSubmit} />
        </Box>
        <Box w='50%' p='20px'>
          <Md value={state} />
        </Box>
      </Flex>
    </>
  )
}