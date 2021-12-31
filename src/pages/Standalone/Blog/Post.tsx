import React, { useState } from 'react';
import { PostRenderer } from '../../Blog/Post';

export const Post = ({
  post,
  categories
}: {
  post: any,
  categories: any,
}) => {
  const [state, setState] = useState(post);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  return (
    <PostRenderer state={state} categories={categories} onChange={onChange} onSubmit={() => console.log('click onSubmit!!!')}/>
  );
};