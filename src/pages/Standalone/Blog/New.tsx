import React from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { useForm } from '../../Blog/hooks/useForm';
import { Form } from '../../Blog/utils/Form';
import { Md } from '../../Blog/utils/Md';

export const New = ({
  categories,
}: {
  categories: any;
}) => {
  const {
    state, 
    handleChange,
    // handleSubmit,
  } = useForm();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  const onSubmit = () => {
    console.log('submited!!');
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