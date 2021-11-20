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
import { useEffect, useState } from 'preact/hooks';
import { Link } from 'preact-router';
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
  const url = `${import.meta.env.VITE_API_URL}/admin/blog`;
  useEffect(() => {
    (async () => {
      const p = await fetcher({
        url,
        method: 'GET',
      });
      setPosts(p);
    })();
  }, []);

  return (
    <Box w='80vw' m='30px auto'>
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
            posts.map((p, index) => (
              <Tbody key={index.toString()}>
                <Tr>
                  <Td>{p.id}</Td>
                  <Td>{p.title}</Td>
                  <Td>{p.is_open ? <Badge colorScheme="green" variant="solid" fontSize="0.8em">公開中</Badge> : <Badge colorScheme="red" fontSize="0.8em">非公開</Badge>}</Td>
                  <Td>{p.pub_date}</Td>
                  <Td><Link href={`/blog/${p.id}`}><Badge fontSize="0.8em">編集</Badge></Link></Td>
                </Tr>
              </Tbody>
            ))
          }
      </Table>
    </Box>
  );
}