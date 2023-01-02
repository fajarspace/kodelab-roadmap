import React from 'react'
import { Container, Stack, Spacer, Box, Heading, Text, Center, Wrap, WrapItem } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Roadmap = () => {
  return (
    <>
      <Box bg='#0C041D'>
        <Container maxW="container.md" pt="50px" pb="100px">
          <Wrap spacing='30px' justify='space-around'>
            <WrapItem>
              <Link to="/">
                <Box rounded='10px' p={5} w='230px' h='120px' bg='#1E182D' color='white'>
                  <Heading size='md'>Frontend</Heading>
                  <Text size='sm' color='gray.200'>step by step untuk menjadi Frontend developer</Text>
                </Box>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link to="/">
                <Box rounded='10px' p={5} w='230px' h='120px' bg='#1E182D' color='white'>
                  <Heading size='md'>Backend</Heading>
                  <Text size='sm' color='gray.200'>step by step untuk menjadi Backend developer</Text>
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
      </Box>
    </>
  )
}

export default Roadmap