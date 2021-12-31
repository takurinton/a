import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { signIn } from "next-auth/client";

export default function Unauthrized() {
  return (
    <Box>
      <Button onClick={() => signIn()}>ログインし直す</Button>
    </Box>
  );
}