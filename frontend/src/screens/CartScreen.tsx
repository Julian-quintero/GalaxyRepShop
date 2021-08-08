import React from "react";
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
import { CartItems} from "../components/cart/CartItems";
export const CartScreen = () => {
  return (
      <>
    <SimpleGrid columns={[1, 1, 2]} spacing={10} m={10}>
    <Box w="100%" p={4} color="white">
        <CartItems></CartItems>
        <CartItems></CartItems>
        <CartItems></CartItems>
    </Box>
       
   

    
      <Box w="100%" p={4} color="BLACK" >
      <Table variant="simple">
  
  <Thead>
    <Tr>
      <Th>ITEMS</Th>
      <Th>TOTAL PRICE</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>3</Td>
      <Td>$ 3000</Td>
    </Tr>
    <Center>
    <Tfoot>

       
  
    <Button leftIcon={<BiCart></BiCart>} colorScheme="green" mt={2}  maxH="sm" maxW="sm" >GO TO CHECKOUT</Button>
   
    </Tfoot>
    </Center>
  </Tbody>

</Table>
      </Box>
     
    </SimpleGrid>  
    </>
  );
};
