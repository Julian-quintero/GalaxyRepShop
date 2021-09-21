import React, { useEffect, useState } from "react";
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
  Flex,
  Text,
  Tfoot
} from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { CartItems } from "../components/cart/CartItems";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { singleProduct } from "../actions/interfaces/product";
import Lottie from "react-lottie";
import animationData from "../lottie/11646-no-activity-animation.json";

interface MatchParams {
  id: string | undefined;
}

interface stateType {
  from: { pathname: string };
}

interface RootState {
  rootState: { cart: { cartItems: {} } };
  cartReducer: {};
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const CartScreen = ({ match,history }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();

  let location = useLocation<stateType>();
  const productId = match?.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart: any = useSelector((state: RootState) => state.rootState.cart);

  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, qty, productId]);

  if (!cart) {
    return (
      <Center>
        <Lottie options={defaultOptions} height={200} width={300} />
      </Center>
    );
  } else
    return (
      <>
      <Center>
      <Text fontSize="3xl" align="center" color="teal.700"  textAlign="center"  as={"span"}  position={"relative"}  _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "teal",
              zIndex: -1,
            }}
          >SHOPPING CART</Text>
          </Center>
        <SimpleGrid columns={[1, 1, 1,1]} spacing={10} m={10}>
        <Table w="50%" variant="simple" justifySelf="center">
              <Thead>
                <Tr>
                  <Th>ITEMS</Th>
                  <Th>TOTAL PRICE</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{cart.length}</Td>
                  <Td>
                    $
                    {cart
                      .reduce(
                        (acc: number, item: singleProduct) =>
                          acc + item.qty * item.price,
                        0
                      )
                      .toFixed(2)}
                  </Td>
                </Tr>          
              </Tbody>
              <Tfoot >
                <Box w="150%" display="flex" flexDirection="row" justifyItems="end" alignItems="center" justifyContent="center">

    <Button mt={4} colorScheme="teal" onClick={()=>history.push('/shipping')} type="submit">
              Continue to checkout
            </Button>
            </Box>
  </Tfoot>
            </Table>
          <Box w="100%" p={4} color="white" >
            <Flex direction="column" alignItems="center" justify="space-evenly">
            {cart.map((product: singleProduct) => (
       
              <CartItems key={product.name} product={product}></CartItems>
    
            ))}
             </Flex>
          </Box>

     
        </SimpleGrid>
      </>
    );
};
