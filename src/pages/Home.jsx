import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react';
// import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Box bg='tomato'>
        <Container maxW="container.md" pb="90px" centerContent>
          <Box py={['23px', '23px', '35px']} color="gray.200">
            <Heading
              color="gray.50"
              fontSize={['22px', '22px', '28px']}
              mb={['8px', '8px', '15px']}
            >
              Hey there! 👋
            </Heading>
            <Text fontSize={['14px', '14px', '16px']} mb="10px">
              <Text fontWeight={500} as="span">
                roadmap.sh
              </Text>{' '}
              is a community effort to create roadmaps, guides and other
              educational content to help guide the developers in picking up the
              path and guide their learnings.
            </Text>
          </Box>

        </Container>
      </Box>
    </>
  )
}

export default Home