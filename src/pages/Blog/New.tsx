import React, { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { useForm } from './hooks/useForm';
import { Form } from './utils/Form';
import { Md } from './utils/Md';
import { fetcher } from '../../utils/fetcher';

const initialState = {
  category: '',
  contents: '',
  id: 0,
  is_open: null,
  pub_date: '',
  title: '',
}

export const New = () => {
  const {
    state, 
    handleChange,
    handleSubmit,
  } = useForm();

  const [categories, setCategories] = useState({ category: [{ id: 0, name: '' }]});

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  const onSubmit = () => {
    console.log('submited!!');
    handleSubmit();
  };

  useEffect(() => {
    const curl = `${import.meta.env.VITE_API_URL}/admin/blog/category`;
    (async () => {
      const c = await fetcher({
        url: curl,
        method: 'GET',
      })
      setCategories(c);
    })();
  }, []);

  return (
    <Flex p='30px'>
      <Box w='50%' p='20px'>
        <Form state={{ ...state, category: '' }} categories={categories} onChange={onChange} onSubmit={onSubmit} />
      </Box>
      <Box w='50%' p='20px'>
        <Md value={state} />
      </Box>
    </Flex>
  );
};