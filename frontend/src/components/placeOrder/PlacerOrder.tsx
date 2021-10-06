import React, { useState, useEffect } from "react";
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
  Tfoot,
  Divider,
  Heading,
  TableCaption,
  Container,
} from "@chakra-ui/react";
import { CartItems } from "../cart/CartItems";
import { product, singleProduct } from "../../actions/interfaces/product";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

interface RootState {
  rootState: { cart: cartAddItem[] };
  cartReducer: {shippingAddress: formData};
  userLogin:{userInfo:{token:string}}
}

interface cartAddItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}



interface formData {
  address: string;
  city: string;
  postalC: string;
  country: string;
}

export const PlacerOrder = () => {
  const FORM_ID = "payment-form";

  const [preferenceId, setPreferenceId] = useState<null | string>(null);

  const {userInfo} = useSelector(
    (state: RootState) => state.userLogin
  );

  const getPreferenceId = async () => {

    
    

   const result = await axios.post("/api/payments/mercadopago",{
     orderItems:cart,    
     shippingAddress:shippingAddress,
     paymentMethod:"MercadoPago",
     itemsPrice:itemsPrice,
     taxPrice:taxPrice,
     shippingPrice:totalPrice,
     totalPrice:totalPrice,



    },{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      }
    })

   setPreferenceId(result.data.idpago);



  }


  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    // axios.post("/api/payments/mercadopago",{cart}).then((item: string) => {
    //   setPreferenceId(item.data.idpago);
    // });
    getPreferenceId()
  }, []);


  async function loadScript(preferenceId: string) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
    script.setAttribute("data-preference-id", preferenceId);
    const form = document.getElementById(FORM_ID);
    form?.appendChild(script);
    script.onload = function () {
      let button = document.querySelector(".mercadopago-button");

      if (button) {
        button.innerHTML = "Continue to Checkout";
      }
    };

   
  }

  useEffect(() => {
    if (preferenceId) {


      loadScript(preferenceId);
    }
  }, [preferenceId]);

  const cart: cartAddItem[] = useSelector(
    (state: RootState) => state.rootState.cart
  );

  const shippingAddress: formData = useSelector(
    (state: RootState) => state.cartReducer.shippingAddress
  );

  

  

  const itemsPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxPrice = (itemsPrice * 0.15).toFixed(2)
  const totalPrice = (itemsPrice * 0.15 + itemsPrice).toFixed(2)


  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} m={10}>
        <Box>
          <Text
            fontSize="3xl"
            align="center"
            color="teal.700"
            textAlign="center"
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "10%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "teal",
              zIndex: -1,
            }}
          >
            SHIPPING ADDRESS
          </Text>

          <Heading size="sm"  mt="6" mb="2">
            { shippingAddress.address} { shippingAddress.city} { shippingAddress.country} { shippingAddress.postalC}
          </Heading>

          <Divider></Divider>

          <Text
            fontSize="3xl"
            align="center"
            color="teal.700"
            textAlign="center"
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "10%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "teal",
              zIndex: -1,
            }}
          >
            PAYMENT METHOD
          </Text>

          <Heading size="sm"  mt="6" mb="2">
           MercadoPago
          </Heading>

          <Divider></Divider>

          <Text
            fontSize="3xl"
            align="center"
            color="teal.700"
            textAlign="center"
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "10%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "teal",
              zIndex: -1,
            }}
          >
            ORDER ITEMS
          </Text>

          <Box w="100%" color="white">
            <Flex direction="column" alignItems="center" justify="space-evenly">
              {cart ? (
                cart.map((product: singleProduct) => (
                  <CartItems
                    key={product.name}
                    placeOrder={true}
                    product={product}
                  ></CartItems>
                ))
              ) : (
                <p>No hay objetos en el carrito</p>
              )}
            </Flex>
          </Box>
        </Box>

        <Container borderWidth={2} borderRadius={5} w={300} h={300}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ORDER SUMMARY</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Items: ${itemsPrice}</Td>
              </Tr>
              <Tr>
                <Td>Tax: ${taxPrice}</Td>
              </Tr>
              <Tr>
                <Td>Total: ${totalPrice} </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>
                  {" "}
                  <div>
                    <form id={FORM_ID} method="GET" />
                  </div>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </Container>
      </SimpleGrid>
    </>
  );
};
