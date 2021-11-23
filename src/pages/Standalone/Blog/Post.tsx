import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostRenderer } from '../../Blog/Post';
import json from './blog.json';

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
  useEffect(() => {
    (async () => {
      const post = json.filter(p => p.id === Number(id))[0] as any;
      setState(post);
    })();

  }, []);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  return (
    <PostRenderer state={state} onChange={onChange} />
  );
};