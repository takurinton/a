import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Badge,
} from "@chakra-ui/react"
import Link from 'next/link';
import { Posts as Props } from '../../../utils/types';

type PostsProps = {
  posts: Props;
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <Box w='80vw' m='30px auto'>
      <Box textAlign='right' p='0 0 20px'>
        <Link href='/standalone/blog/new'>
          <a><Badge colorScheme="green" variant="solid" fontSize="1.2em">新しい投稿を作成</Badge></a>
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
          posts.map((p, index: number) => (
            <Tbody key={index.toString()}>
              <Tr>
                <Td>{p.id}</Td>
                <Td>{p.title}</Td>
                <Td>{p.is_open ? <Badge colorScheme="green" variant="solid" fontSize="0.8em">公開中</Badge> : <Badge colorScheme="red" fontSize="0.8em">非公開</Badge>}</Td>
                <Td>{p.pub_date}</Td>
                <Td><Link href={`/standalone/blog/edit/${p.id}`}><a><Badge fontSize="0.8em">編集</Badge></a></Link></Td>
              </Tr>
            </Tbody>
          ))
        }
      </Table>
    </Box>
  );
}