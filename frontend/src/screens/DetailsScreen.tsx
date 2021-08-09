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
  Button
} from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import {RouteComponentProps } from 'react-router-dom';
import { useDetails } from "../hooks/useDetails";

interface MatchParams {
  id: string | undefined;
}

export interface productInterface {
  rating:       number;
  numReviews:   number;
  price:        number;
  countInStock: number;
  _id:          string;
  name:         string;
  image:        string;
  description:  string;
  brand:        string;
  category:     string;
  user:         string;
  reviews:      any[];
  __v:          number;
  createdAt:    Date;
  updatedAt:    Date;
}
export const DetailsScreen = ({match}:RouteComponentProps<MatchParams>) => {



const {loading,product,error} : {product:productInterface, loading:boolean, error:string} = useDetails(match.params.id)
 


  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} m={10}>
        <Box bg="tomato" w="100%" p={4} color="white">
          <Center>
            <Image
              boxSize="50vh"
              objectFit="cover"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
            />
          </Center>
        </Box>
        <Box w="100%" p={4}>
          <Heading mb={4}></Heading>
          <Stat>
            <StatNumber>{}</StatNumber>
            <Text fontSize="xl" mt={5} color="green" fontWeight={700} >
       {product.name}
          </Text>
            <Flex mt={5} >
            <Text fontSize="xl">
         Qty
          </Text>
            <Select w={20} ml={3}>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </Select>
            <Button leftIcon={<BiCart></BiCart>} colorScheme="teal" ml={3}>
          Add to cart
        </Button>            
            </Flex>
          </Stat>
  
          <Divider mt={10}></Divider>
          <Text fontSize="xl">
            Bluetooth technology lets you connect it with compatible devices
            wirelessly High-quality AAC audio offers immersive listening
            experience Built-in microphone allows you to take calls while
            working
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};
