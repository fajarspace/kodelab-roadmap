import React from 'react'
import { Container, Flex, Spacer, Box, Heading, Text } from '@chakra-ui/react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Box bg='#0C041D' color='white'>
        <Container pt={5} pb={5} maxW="container.md">
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
              <Link to="/">
                <Heading size='md'>Kodelab</Heading>
              </Link>
            </Box>
            <Spacer />
            {/* <ButtonGroup gap='2'>
            <Button colorScheme='teal'>Sign Up</Button>
            <Button colorScheme='teal'>Log in</Button>
          </ButtonGroup> */}
            <Link to="/roadmaps">
              <Text as='b'>Roadmaps</Text>
            </Link>
            <Link to="/blogs">Blogs</Link>
          </Flex>
        </Container>
      </Box>
      <Outlet />
    </>
  )
}

export default Navbar