import React from 'react';
import { useEffect, useState } from 'react';
import { PostsRenderer } from '../../Blog/Posts';
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setPosts(json as any);
      setIsLoading(false);
    })();
  }, []);

  return (
    <PostsRenderer 
      isLoading={isLoading}
      posts={posts}
      isStandalone={true}
    />
  );
}