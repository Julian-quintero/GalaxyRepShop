import React from "react";
import { ProductAddToCartt } from "../components/products/ProductAddToCart";
import {
  Stack,
  HStack,
  VStack,
  Flex,
  SimpleGrid,
  Text,
  Heading,
  Center,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  Box
} from "@chakra-ui/react";
import products2 from "../products";
import { useProducts } from "../hooks/useProducts";

interface CardProps {
  name:string;
  image:string;
  description:string;
  brand:string;
  category:string;
  price:number;
  countInStock:number;
  rating: number;
  numReviews: number;
 
}

export const HomeScreen = ({match}:any) => {

  const keyword = match.params.keyword

  const {products,loading} = useProducts()


  return (
    <>
      <Center>
        <Heading
          lineHeight={1.1}
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            Nuevo
          </Text>

          <br />
          <Text as={"span"} color={"red.400"}>
            En promocion!
          </Text>
        </Heading>
      </Center>


      {loading ?

<Stack
direction={["column", "column", "column", "row"]}
w="full"
align={"center"}


justifyContent="space-around"
>


<SimpleGrid columns={[1, 2, 3, 4]}>
  
<Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
<SkeletonCircle size="150" />
<SkeletonText mt="4" noOfLines={4} spacing="4" />
</Box>

  
<Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
<SkeletonCircle size="150" />
<SkeletonText mt="4" noOfLines={4} spacing="4" />
</Box>

  
<Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
<SkeletonCircle size="150" />
<SkeletonText mt="4" noOfLines={4} spacing="4" />
</Box>

<Box padding="10" boxShadow="lg" bg="white"  maxW="sm" boxSize="250" h={350} m={10}>
<SkeletonCircle size="150" />
<SkeletonText mt="4" noOfLines={4} spacing="4" />
</Box>

</SimpleGrid>


</Stack>
      
      : 

      <Stack
        direction={["column", "column", "column", "row"]}
        w="full"
        align={"center"}
        wrap="wrap"
        justify-content="space-around"
      >
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {products.map((item:any) => (
<ProductAddToCartt test={item}></ProductAddToCartt>


          ))}
        </SimpleGrid>
      </Stack>
      }
    </>
  );
};
