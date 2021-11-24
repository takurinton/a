import React, { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { useForm } from '../../Blog/hooks/useForm';
import { Form } from '../../Blog/utils/Form';
import { Md } from '../../Blog/utils/Md';

const initialState = {
  category: '',
  contents: '',
  id: 0,
  is_open: null,
  pub_date: '',
  title: '',
}

const _categories = {
  category: [
    {
      id: 1,
      name: 'react',
    },
    {
      id: 2,
      name: 'frontend',
    },
    {
      id: 3,
      name: 'poem',
    },
  ]
};

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
    setCategories(_categories);
  }, []);

  return (
    <Flex p='30px'>
      <Box w='50%' p='20px'>
        <Form state={state} categories={categories} onChange={onChange} onSubmit={onSubmit} />
      </Box>
      <Box w='50%' p='20px'>
        <Md value={state} />
      </Box>
    </Flex>
  );
};