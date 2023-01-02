import React from 'react'
import { Container, Flex, Spacer, Box, Heading, Button, ButtonGroup } from '@chakra-ui/react'
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
      <Container maxW="container.md">
        <Flex minWidth='max-content' justifyContent='space-between' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md'>Chakra App</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='2'>
            <Button colorScheme='teal'>Sign Up</Button>
            <Button colorScheme='teal'>Log in</Button>
          </ButtonGroup>
        </Flex>
      </Container>
      <Outlet />
    </>
  )
}

export default Navbar