import React from 'react'
import { Container, Box, Heading, Text, Wrap, WrapItem, Badge } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Roadmap = () => {
  return (
    <>

      <Box bg='#120A21'>
        <Container maxW="container.md" pt="50px" pb="100px">
          <Badge m={3} ml='1' colorScheme='green'>
            Role
          </Badge>
          <Wrap spacing='30px' justify='space-between'>
            <WrapItem>
              <Link to="/">
                <Box rounded='10px' p={3} w='200px' h='120px' bg='#231B30' color='white'>
                  <Heading size='md'>Frontend</Heading>
                  <Text size='sm' color='gray.300'>step by step untuk menjadi Frontend developer</Text>
                </Box>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link to="/">
                <Box rounded='10px' p={3} w='200px' h='120px' bg='#231B30' color='white'>
                  <Heading size='md'>Backend</Heading>
                  <Text size='3px' color='gray.300'>step by step untuk menjadi Backend developer</Text>
                </Box>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link to="/">
                <Box rounded='10px' p={3} w='200px' h='120px' bg='#231B30' color='white'>
                  <Heading size='md'>DevOps</Heading>
                  <Text size='sm' color='gray.300'>step by step untuk menjadi DevOps developer</Text>
                </Box>
              </Link>
            </WrapItem>

          </Wrap>
        </Container>
      </Box>
    </>
  )
}

export default Roadmap