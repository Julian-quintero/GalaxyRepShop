import React from 'react'

import {
    Stack,
    SimpleGrid,
    SkeletonCircle,
    SkeletonText,
    Skeleton,
    Box
  } from "@chakra-ui/react";

export const Skele = () => {
    return (
        <Stack
        direction={["column", "column", "column", "row"]}
        w="full"
        align={"center"}
        
        
        justifyContent="space-around"
        >
        
        
        <SimpleGrid columns={[1, 2, 3, 4]}>
          
        <Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
        <SkeletonCircle size="150" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        
          
        <Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
        <SkeletonCircle size="150" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        
          
        <Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
        <SkeletonCircle size="150" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        
        <Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
        <SkeletonCircle size="150" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        
        </SimpleGrid>
        
        
        </Stack>
    )
}
