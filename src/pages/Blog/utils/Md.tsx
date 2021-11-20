import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";

export const Md = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <chakra.h1 fontSize='2rem' h='100px'>{title}</chakra.h1>
      <chakra.p fontSize='1.2rem'>{text}</chakra.p>
    </>
  );
};