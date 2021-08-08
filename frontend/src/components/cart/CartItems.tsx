import React from 'react'
import {
    Stack,
    SimpleGrid,
    Box,
    Image,
    Center,
    Heading,
    Text,
    StatNumber,
    Stat,
    Divider,
    Select,
    Flex,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react";
  import { BiCart } from "react-icons/bi";
export const CartItems = () => {
    return (
  
        <>
        <Flex align="center" flexDirection={["column", "column", "column", "row"]} >
          <Image
            boxSize="150px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            minw="sm"
            maxw="sm"
          />

          <Text fontSize="xl"  color="black" m={2}>
            Playstation
          </Text>

          <Text fontSize="xl"  color="black" m={2}>
            $ 399
          </Text>

          <Select w={20} m={3} color="black">
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </Select>

            <Button leftIcon={<BiCart></BiCart>} colorScheme="red" m={2}>
          Delete
        </Button>  
    
        </Flex>
        <Divider mt={3} mb={3}></Divider> 
        </>
    )
}
