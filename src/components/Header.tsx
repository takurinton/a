import React from 'react';
import Link from 'next/link';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react';

const Header = ({
  isAdmin,
  isStandalone,
  signIn,
  signOut,
}: {
  isAdmin: boolean;
  isStandalone: boolean;
  signIn: any;
  signOut: any;
}) => {
  const { isOpen } = useDisclosure();

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
          {isAdmin ? (
            <Link href='/'><a>admin.takurinton.dev</a></Link>
          ) : isStandalone ? (
            <Link href='/standalone'>admin.takurinton.dev</Link>
          ) : <a>admin.takurinton.com</a>}
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
              <Text><Link href='/standalone/blog'><a>BLOG</a></Link></Text>
              <Text><Link href='/standalone/portfolio'><a>PORTFOLIOM</a></Link></Text>
            </>
          ) : isAdmin ? (
            <>
              <Text><Link href='/posts'><a>BLOG</a></Link></Text>
              <Text><Link href='/portfolio'><a>PORTFOLIO</a></Link></Text>
              <Text><Link href='/analytics'><a>ANALYTICS</a></Link></Text>
            </>
          ) : <></>
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
              onClick={signOut}
            >
              Logout
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
              onClick={signIn}
            >
              Login
            </Button>
            <Button
              variant='outline'
              _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
              onClick={() => {
                // history.pushState('', '', '/standalone/blog');
                // window.location.reload();
              }}
            >
              <Link href='/standalone/blog'><a>standaloneで試す</a></Link>
            </Button>
          </Box>
        )
      }
    </Flex>
  );
};

export default Header;
