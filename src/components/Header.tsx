import { Link } from 'preact-router';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react';

const Header = (isAdmin: boolean) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      bg='teal.500'
      color='white'
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={'tighter'}>
          <Link href='/'>admin.takurinton.dev</Link>
        </Heading>
      </Flex>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        {
          isAdmin ? (
            <>
              <Text><Link href='/blog'>BLOG</Link></Text>
              <Text><Link href='/portfolio'>PORTFOLIO</Link></Text>
            </>
          ) : <></>
        }
      </Stack>

      {
        isAdmin ? <></> : (
          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            <Button
              variant='outline'
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
            >
              <Link href='/login'>Login</Link>
            </Button>
          </Box>
        )
      }
    </Flex>
  );
};

export default Header;
