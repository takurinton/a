import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react';

const Header = ({ isAdmin, isStandalone }: { isAdmin: boolean; isStandalone: boolean; }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

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
          { isAdmin ? (
            <Link to='/'>admin.takurinton.dev</Link>
           ) : isStandalone ? (
            <Link to='/standalone'>admin.takurinton.dev</Link>
           ): <>admin.takurinton.com</> }
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
        isStandalone ? (
            <>
              <Text><Link to='/standalone/blog'>BLOG</Link></Text>
              <Text><Link to='/standalone/portfolio'>PORTFOLIO</Link></Text>
            </>
          ) : isAdmin ? (
            <>
              <Text><Link to='/blog'>BLOG</Link></Text>
              <Text><Link to='/portfolio'>PORTFOLIO</Link></Text>
            </>
          ): <></>
        }
      </Stack>

      {
        isAdmin ? (
          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            <Button
              variant='outline'
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
            >
              <Link to='/' onClick={logout}>Logout</Link>
            </Button>
          </Box>
        ) : (
          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            mt={{ base: 4, md: 0 }}
          >
            <Button
              variant='outline'
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
            >
              <Link to='/login'>Login</Link>
            </Button>
            <Button
              variant='outline'
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
              onClick={() => window.location.reload()}
            >
              <Link to='/standalone/blog'>standaloneで試す</Link>
            </Button>
          </Box>
        )
      }
    </Flex>
  );
};

export default Header;
