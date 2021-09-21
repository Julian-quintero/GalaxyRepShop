import React,{useState} from "react";
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
import { useSelector,useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { RouteComponentProps } from "react-router-dom";

interface RootState { 
    cartReducer: {shippingAddress:formData};
  }

  interface formData {
    address:string
    city:string
    postalC:string
    country:string
  }

export const ShippingScreen = ({history}:RouteComponentProps) => {


    const dispatch = useDispatch()
    const cart = useSelector((state:RootState) => state.cartReducer)
    console.log(cart)
    
    const {shippingAddress} = cart


    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalC, setPostalC] = useState(shippingAddress.postalC);
    const [country, setCountry] = useState(shippingAddress.country);

    const formData:formData = {address,city,postalC,country}

    function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
   
        e.preventDefault();  
        dispatch(saveShippingAddress(formData))
        history.push('/payment')
    
    }



  return (
    <>
 
        <Box display="flex"  flexDirection="column" w="100%" alignItems="center" justifyItems="center">
        <Heading mb={4} color="green" fontWeight={700}>
             SHIPPING
            </Heading>
          
          <Box w="30%" p={4} color="white">
          <form onSubmit={(e) => submitHandler(e)}>
            <FormControl id="Address" color="green" mt={3}>
              <FormLabel>Address</FormLabel>
              <Input  value={address} type="text" onChange={(e) => setAddress(e.target.value)} />
            </FormControl>

            <FormControl value={city} id="city" color="green" mt={3}>
              <FormLabel>City</FormLabel>
              <Input type="text"  onChange={(e) => setCity(e.target.value)} />
            </FormControl>

            <FormControl value={postalC} id="password" color="green" mt={3}>
              <FormLabel>Postal Code</FormLabel>
              <Input type="text"  onChange={(e) => setPostalC(e.target.value)}/>
            </FormControl>

            <FormControl value={country} id="password" color="green" mt={3}>
              <FormLabel>Country</FormLabel>
              <Input type="text"  onChange={(e) => setCountry(e.target.value)} />
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




