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
import { BiCart } from "react-icons/bi";
import { RouteComponentProps } from "react-router-dom";
import { useDetails } from "../hooks/useDetails";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";

import animationData from "../lottie/9844-loading-40-paperplane.json";
import { productInterface } from "../actions/interfaces/product";
import { useState } from "react";

interface MatchParams {
  id: string | undefined;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const DetailsScreen = ({ match }: RouteComponentProps<MatchParams>) => {
  const {
    loading,
    product,
    error,
  }: { product: productInterface; loading: boolean; error: string } =
    useDetails(match.params.id);
  const history = useHistory();
  const [qty, setQty] = useState(1)

 

  const addToCartHandler=()=>{
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  if (loading) {
    return <Lottie options={defaultOptions} height={600} width={600} />;
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
              rounded="lg"
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
            <Text fontSize="xl" mt={5} fontWeight={700}>
              $ {product.price}
            </Text>
            <Flex mt={5}>
              <Text fontSize="xl">Qty:</Text>
              <Select w={20} ml={3} onChange={(e)=>{setQty(Number(e.target.value))}}>
                {Array.from(Array(product.countInStock).keys()).map(
                  (i, index) => (
                    <option>{index + 1}</option>
                  )
                )}
              </Select>
              <Button leftIcon={<BiCart></BiCart>} colorScheme="teal" ml={3} onClick={addToCartHandler}>
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
