import React from 'react';
import { chakra } from "@chakra-ui/system";
import ReactMarkdown from "react-markdown";

export const Md = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <chakra.h1 fontSize='2rem' h='100px'>{title}</chakra.h1>
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  );
};