import React from 'react';
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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(state);
    handleChange(event);
  };

  const onSubmit = () => {
    console.log('submited!!');
    handleSubmit();
  };

  return (
    <Flex p='30px'>
      <Box w='50%' p='20px'>
        <Form value={state} onChange={onChange} onSubmit={onSubmit} />
      </Box>
      <Box w='50%' p='20px'>
        <Md value={state} />
      </Box>
    </Flex>
  );
};