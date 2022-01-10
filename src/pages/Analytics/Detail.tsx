import { useState } from "react";
import { useQuery } from "urql";
import { Box, Spinner } from '@chakra-ui/react';
import { DocumentNode, parse, print } from "graphql";
import { PORTFOLIO, BLOG, PORTFOLIO_NUMBER, BLOG_NUMBER, ALL_NUMBER, BLOG_DEV, PORTFOLIO_DEV, PORTFOLIO_DEV_NUMBER, BLOG_DEV_NUMBER } from './utils/constants';
import { getParams } from './utils/getParams';
import { TransformerContextProvider } from './context/context';
import { DetailComponent } from './components/DetailComponent';

const now = new Date();
const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`;

const initialQuery = (domain: number, path: string) => `
{
  analytics_by_path_for_blog(domain: ${domain}, path: "${path}", start: "2021-08-27", end: "${today}") {
    count
    date_count {
      date 
      count
    }
  }
}
`;

export const Detail = () => {
    const domainString = getParams('domain');
    const domain = domainString === PORTFOLIO ?
        PORTFOLIO_NUMBER : domainString === BLOG ?
            BLOG_NUMBER : domainString === PORTFOLIO_DEV ?
                PORTFOLIO_DEV_NUMBER : domainString === BLOG_DEV ?
                    BLOG_DEV_NUMBER : ALL_NUMBER;
    const path = getParams('path') ?? '';
    const [query, setQuery] = useState<string>(initialQuery(domain, path));
    const [ast, setAst] = useState<DocumentNode>(parse(initialQuery(domain, path)));

    const [result] = useQuery({
        query: query,
    });

    if (query === initialQuery(domain, path)) {
        return result.fetching ?
            <Box textAlign='center' m='50px 0 0'>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Box> :
            <TransformerContextProvider
                root={ast}
                onChangeNode={ast => {
                    setAst(ast);
                    setQuery(print(ast));
                    console.log(print(ast))
                }}
            >
                <DetailComponent ast={ast} result={result} domainString={domainString} path={path} />
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
                <DetailComponent ast={ast} result={result} domainString={domainString} path={path} />
            </TransformerContextProvider>
        </>
    )
}