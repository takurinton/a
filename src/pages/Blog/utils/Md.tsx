import React from 'react';
import { chakra } from "@chakra-ui/system";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Md = ({ value }: { value: any }) => {
  return (
    <>
      <chakra.h1 fontSize='2rem' h='100px'>{value.title}</chakra.h1>
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <chakra.h1 fontSize='2rem' borderBottom='solid 1px gray' {...props} />,
          h2: ({node, ...props}) => <chakra.h2 fontSize='1.6rem' {...props} />,
          h3: ({node, ...props}) => <h3 style={{color: 'pink'}} {...props} />,
          a: ({node, ...props}) => <chakra.a href={props.href} style={{color: '#ff69b4'}} fontSize='1.2rem' fontWeight='500' {...props} />,
          p: ({node, ...props}) => <chakra.p lineHeight='150%' p='10px 0 10px' fontSize='1.2rem' fontWeight='500' {...props} />,
          ul: ({node, ...props}) => <chakra.ul fontSize='1.2rem' p='0 10px' m='10px 0' {...props} />,
          li: ({node, ...props}) => <chakra.li fontSize='1.2rem' p='0 10px' {...props} />,
          em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />,
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {value.contents}
      </ReactMarkdown>
    </>
  );
};