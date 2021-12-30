import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/layout';
import { fetcher } from '../../utils/fetcher';
import { Form } from './utils/Form';
import { Md } from './utils/Md';
import Router from 'next/router';

export const Post = ({
  post,
  categories
}: {
  post: any,
  categories: { category: { id: number; name: string }[] }
}) => {
  const [state, setState] = useState(post);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target) {
      // @ts-ignore
      setState({ ...state, pub_date: event });
    } else {
      setState({ ...state, [event.target.name]: event.target.value});
    }
  };

  const onSubmit = () => {
    (async () => await fetcher({
      url: `https://api.takurinton.com/admin/blog/post/${post.id}`,
      _body: JSON.stringify({
        ...state,
        is_open: state.is_open === 'true' ? true: false,
        pub_date: state.pub_date.toISOString(),
      }),
      method: 'PATCH'
    })
    .then(res => {
      if (res.title !== state.title) {
        console.log('error');
      } else {
        Router.push('/posts');
      };
    }))();
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