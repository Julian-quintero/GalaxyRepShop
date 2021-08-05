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
  Center
} from "@chakra-ui/react";
export const HomeScreen = () => {
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
    <Stack
      direction={["column", "column", "column", "row"]}
      w="full"
      align={"center"}
      wrap="wrap"
      justify-content="space-around"

    >
       

      <SimpleGrid columns={[1, 2, 3, 4]}>
        <ProductAddToCartt></ProductAddToCartt>
        <ProductAddToCartt></ProductAddToCartt>
        <ProductAddToCartt></ProductAddToCartt>
        <ProductAddToCartt></ProductAddToCartt>
        <ProductAddToCartt></ProductAddToCartt>
        <ProductAddToCartt></ProductAddToCartt>
      </SimpleGrid>
    </Stack>
    </>
  );
};
