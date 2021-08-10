import {
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
} from "@chakra-ui/react";
import React from 'react'
import { BiCart } from "react-icons/bi";
import { RouteComponentProps } from "react-router-dom";
import { useDetails } from "../hooks/useDetails";
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie'

import animationData from "../lottie/9844-loading-40-paperplane.json";

interface MatchParams {
  id: string | undefined;
}

export interface productInterface {
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  user: string;
  reviews: any[];
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}
export const DetailsScreen = ({ match }: RouteComponentProps<MatchParams>) => {
  const {
    loading,
    product,
    error,
  }: { product: productInterface; loading: boolean; error: string } =
    useDetails(match.params.id);
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
 

  if (loading) {
    return (
      <Lottie
      options={defaultOptions}
      height={600}
      width={600} 
    />
    )
  } else if (error) {
    history.push("/");
  }

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} m={10}>
        <Box w="100%" p={4} color="white">
          <Center>
            <Image
              boxSize="50vh"
              objectFit="cover"
              src={product.image}
              alt="Segun Adebayo"
            />
          </Center>
        </Box>
        <Box w="100%" p={4}>
          <Heading mb={4}></Heading>
          <Stat>
            <StatNumber>{}</StatNumber>
            <Text fontSize="xl" mt={5} color="green" fontWeight={700}>
              {product.name}
            </Text>
            <Text fontSize="xl" mt={5} fontWeight={700}>$ {product.price}</Text>
            <Flex mt={5}>
              <Text fontSize="xl">Qty:</Text>
              <Select w={20} ml={3}>
         
                {

 

Array.from(Array(product.countInStock).keys()).map((i,index) => (          
             
                   
                  <option value="option1">{index + 1}</option>
                ))}
              </Select>
              <Button leftIcon={<BiCart></BiCart>} colorScheme="teal" ml={3}>
                Add to cart
              </Button>
            </Flex>
          </Stat>

          <Divider mt={10}></Divider>
          <Text fontSize="xl">{product.description}</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};
