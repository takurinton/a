import React, { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { useForm } from './hooks/useForm';
import { Form } from './utils/Form';
import { Md } from './utils/Md';

export const New = ({
  token,
  categories,
}: {
  token: string;
  categories: { category: { id: number; name: string; }[] }
}) => {
  const {
    state, 
    handleChange,
    handleSubmit,
  } = useForm();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  const onSubmit = () => {
    handleSubmit(token);
  };

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