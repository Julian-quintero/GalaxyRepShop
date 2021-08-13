import React,{useEffect,useState} from "react";
import {
  SimpleGrid,
  Box,
  Center,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { CartItems} from "../components/cart/CartItems";
import { RouteComponentProps,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../actions/cartActions";
import {  singleProduct } from "../actions/interfaces/product";


interface MatchParams {
  id: string | undefined;
}

interface stateType {
  from: { pathname: string }
}

interface RootState {
  rootState: {cart:{cartItems:{}}},
  cartReducer:{}
}




export const CartScreen = ({ match }: RouteComponentProps<MatchParams>) => {

  const dispatch = useDispatch()

  let location = useLocation<stateType>();  
  const productId = match?.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1  
  const cart:any = useSelector((state:RootState) => state.rootState.cart)  
  
  


  useEffect(() => {

 
      
      dispatch(addToCart(productId, qty))     
  
  }, [dispatch,qty,productId])

  


  

  if (!cart) {

    return (
      <p>Tu carrito esta vacio</p>
    )
    
  }else

  

  return (
      <>
    <SimpleGrid columns={[1, 1, 2]} spacing={10} m={10}>
    <Box w="100%" p={4} color="white">
    {cart.map((product:singleProduct)=>(     
      
 <CartItems key={product.name} product={product}></CartItems>
    ))}

    
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
    {/* <Center>
 

       
  
    <Button leftIcon={<BiCart></BiCart>} colorScheme="green" mt={2}  maxH="sm" maxW="sm" >GO TO CHECKOUT</Button>
   
    
    </Center> */}
  </Tbody>

</Table>
      </Box>
     
    </SimpleGrid>  
    </>
  );
};
