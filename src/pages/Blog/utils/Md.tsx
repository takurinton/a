import React from 'react';
import { chakra } from "@chakra-ui/system";
import ReactMarkdown from "react-markdown";

export const Md = ({ value }: { value: any }) => {
  return (
    <>
      <chakra.h1 fontSize='2rem' h='100px'>{value.title}</chakra.h1>
      <ReactMarkdown>{value.contents}</ReactMarkdown>
    </>
  );
};