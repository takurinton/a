import { useState } from "react";
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useQuery } from 'urql';
import { DocumentNode, parse, print } from "graphql";
import { Result } from "./components/Result";
import { Form } from './components/Form';
import { Paginator } from './components/Paginator';
import { TransformerContextProvider } from './context/context';
import { getParams } from "./utils/getParams";

const initialQuery = `
query getAnalytics {
  analytics(domain: 0, path: "", page: 1, start: "", end: "") {
    count
    pages {
      next
      prev 
      page_count 
      current
    }
    analytics {
      id 
      domain 
      path
      created_at
    }
    path_list {
      domain 
      path
    }
  }
}`;

export const Analytics = () => {
  const page = getParams('page') ?? 1;
  const [query, setQuery] = useState(initialQuery)
  const [ast, setAst] = useState<DocumentNode>(parse(initialQuery));

  const [result] = useQuery({
    query: query,
  });

  if (query === initialQuery) {
    return result.fetching ?
      <Box textAlign='center' m='50px 0 0'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
      :
      <TransformerContextProvider
        root={ast}
        onChangeNode={ast => {
          setAst(ast);
          setQuery(print(ast));
          console.log(print(ast))
        }}
      >
        <Flex>
          <Form result={result} node={ast} />
          <Box>
            <Result result={result} ast={ast} />
            <Paginator result={result} />
          </Box>
        </Flex>
      </TransformerContextProvider>
  }

  return (
    <>
      <TransformerContextProvider
        root={ast}
        onChangeNode={ast => {
          setAst(ast);
          setQuery(print(ast));
          console.log(print(ast))
        }}
      >
        <Flex>
          <Form result={result} node={ast} />
          <Box>
            <Result result={result} ast={ast} />
            <Paginator result={result} />
          </Box>
        </Flex>
      </TransformerContextProvider>
    </>
  )
};
