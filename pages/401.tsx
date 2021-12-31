import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { signIn } from "next-auth/client";
import { useEffect } from "react";

export default function Unauthrized() {
  useEffect(() => {
    signIn();
  }, []);
  
  return (
    <></>
  );
}