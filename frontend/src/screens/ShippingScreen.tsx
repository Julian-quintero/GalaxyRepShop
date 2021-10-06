import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { RouteComponentProps } from "react-router-dom";
import { CheckoutSteps } from "../components/CheckoutSteps/CheckoutSteps";

interface RootState {
  cartReducer: { shippingAddress: formShippingData };
}

interface formShippingData {
  address: string;
  city: string;
  postal: string;
  country: string;
}

export const ShippingScreen = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cartReducer);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postal, setPostal] = useState(shippingAddress.postal);
  const [country, setCountry] = useState(shippingAddress.country);

  const formData: formShippingData = { address, city, postal, country };

  function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(saveShippingAddress(formData));
    history.push("/payment");
  }

  return (
    <>
      <CheckoutSteps step2={true}></CheckoutSteps>

      <Box
        display="flex"
        flexDirection="column"
        w="100%"
        alignItems="center"
        justifyItems="center"
      >
        <Heading mb={4} color="green" fontWeight={700}>
          SHIPPING
        </Heading>

        <Box w="30%" p={4} color="white">
          <form onSubmit={(e) => submitHandler(e)}>
            <FormControl id="Address" color="green" mt={3}>
              <FormLabel>Address</FormLabel>
              <Input
                value={address}
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>

            <FormControl id="city" color="green" mt={3}>
              <FormLabel>City</FormLabel>
              <Input
                value={city}
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" color="green" mt={3}>
              <FormLabel>Postal Code</FormLabel>
              <Input
                value={postal}
                type="text"
                onChange={(e) => setPostal(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" color="green" mt={3}>
              <FormLabel>Country</FormLabel>
              <Input
                value={country}
                type="text"
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Continue
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};
