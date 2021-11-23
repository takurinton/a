import React from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { useForm } from './hooks/useForm';
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

export const New = () => {
  const {
    state, 
    handleChange
  } = useForm();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  return (
    <Flex p='30px'>
      <Box w='50%' p='20px'>
        <Form value={state.contents} onChange={onChange} />
      </Box>
      <Box w='50%' p='20px'>
        <Md title={state.title} text={state.contents} />
      </Box>
    </Flex>
  );
};