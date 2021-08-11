import React,{useEffect,useState} from "react";
import {
  SimpleGrid,
  Box,
  Center,
  Button,
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
import { RouteComponentProps,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../actions/cartActions";
interface MatchParams {
  id: string | undefined;
}

interface stateType {
  from: { pathname: string }
}

export const CartScreen = ({ match }: RouteComponentProps<MatchParams>) => {

  const dispatch = useDispatch()

  let location = useLocation<stateType>();  
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
  }
  }, [dispatch])

  

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
 

       
  
    <Button leftIcon={<BiCart></BiCart>} colorScheme="green" mt={2}  maxH="sm" maxW="sm" >GO TO CHECKOUT</Button>
   
    
    </Center>
  </Tbody>

</Table>
      </Box>
     
    </SimpleGrid>  
    </>
  );
};
