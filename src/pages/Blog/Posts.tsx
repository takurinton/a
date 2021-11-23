import React from 'react';
import { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Badge,
  Spinner,
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { fetcher } from "../../utils/fetcher";

const initialState = [
  {
    category: '',
    contents: '',
    id: 0,
    is_open: null,
    pub_date: '',
    title: '',
  },
];

export const Posts = () => {
  const [posts, setPosts] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const url = `${import.meta.env.VITE_API_URL}/admin/blog`;
  useEffect(() => {
    (async () => {
      const p = await fetcher({
        url,
        method: 'GET',
      });
      setPosts(p);
      setIsLoading(false);
    })();
  }, []);

  return (
    <PostsRenderer 
      isLoading={isLoading}
      posts={posts}
    />
  );
}

export const PostsRenderer = ({ isLoading, posts }: { isLoading: boolean; posts: any; }) => {
  return (
    isLoading 
    ? (
      <Box textAlign='center' p='100px 0'>
        <Spinner />
      </Box>
    ) : (
      <Box w='80vw' m='30px auto'>
        <Box textAlign='right' p='0 0 20px'>
          <Link to='/blog/new'>
            <Badge colorScheme="green" variant="solid" fontSize="1.2em">新しい投稿を作成</Badge>
          </Link>
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>title</Th>
              <Th>is_open</Th>
              <Th>created_at</Th>
              <Th>action</Th>
            </Tr>
          </Thead>
            {
              posts.map((p: any, index: number) => (
                <Tbody key={index.toString()}>
                  <Tr>
                    <Td>{p.id}</Td>
                    <Td>{p.title}</Td>
                    <Td>{p.is_open ? <Badge colorScheme="green" variant="solid" fontSize="0.8em">公開中</Badge> : <Badge colorScheme="red" fontSize="0.8em">非公開</Badge>}</Td>
                    <Td>{p.pub_date}</Td>
                    <Td><Link to={`/blog/${p.id}`}><Badge fontSize="0.8em">編集</Badge></Link></Td>
                  </Tr>
                </Tbody>
              ))
            }
        </Table>
      </Box>
    )
  );
};