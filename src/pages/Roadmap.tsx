import React from 'react'
import { Container, Stack, Spacer, Box, Heading, Text, Center, Wrap, WrapItem } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Roadmap = () => {
  return (
    <>
      <Container maxW="container.md" pb="90px" >
        <Wrap spacing='30px' justify='space-around'>
          <WrapItem>
            <Link to="/">
              <Box p={2} w='180px' h='80px' bg='#1E182D' color='white'>
                <Heading size='md'>Frontend</Heading>
              </Box>
            </Link>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='green.200'>
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='tomato'>
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='blue.200'>
              Box 4
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='180px' h='80px' bg='blackAlpha.500'>
              Box 5
            </Center>
          </WrapItem>
        </Wrap>
      </Container>
    </>
  )
}

export default Roadmap