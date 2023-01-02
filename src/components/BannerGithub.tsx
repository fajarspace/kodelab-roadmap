import { Box, Container, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react'

const BannerGithub = () => {
  return (
    <Box bg='white' borderTopWidth={1} py={['45px', '45px', '70px']} textAlign='center'>
      <Container maxW='container.sm'>
        <Heading fontSize={['25px', '25px', '35px']} mb={['10px', '10px', '20px']}>Open Source</Heading>
        <Text lineHeight='26px' fontSize={['15px', '15px', '16px']} mb='20px'>The project is OpenSource,&nbsp;
          .</Text>
        <iframe
          src='https://ghbtns.com/github-btn.html?user=fajarspace&repo=kodelab-roadmap&type=star&count=true&size=large'
          frameBorder='0'
          scrolling='0'
          width='170'
          height='30'
          style={{ margin: 'auto' }}
          title='GitHub'
        />
      </Container>
    </Box>
  )
}

export default BannerGithub