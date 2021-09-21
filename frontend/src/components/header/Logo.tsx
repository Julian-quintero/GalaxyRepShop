import React from "react";
import { Box, Text,Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
export default function Logo(props:any) {
  return (
    <Box {...props}>
      <Flex direction="column">
      <Image
    boxSize="100px"
    objectFit="cover"
    
    src={'./planetaRecurso2.png'}
    alt="Segun Adebayo"
  />
  <Text color="teal">Galaxy Shop</Text>
  </Flex>
    </Box>
  );
}