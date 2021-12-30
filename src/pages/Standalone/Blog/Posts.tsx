import React from 'react';
import { useEffect, useState } from 'react';
import { Posts as Component } from '../../Blog/Posts';
import json from './blog.json';

const initialState = [
  {
    category: '',
    contents: '',
    id: 0,
    is_open: null,
    pub_date: new Date(),
    title: '',
  },
];

export const Posts = () => {
  const [posts, setPosts] = useState(initialState);
  useEffect(() => {
    (async () => {
      setPosts(json as any);
    })();
  }, []);

  return (
    <Component 
      posts={posts}
      isStandalone={true}
    />
  );
}