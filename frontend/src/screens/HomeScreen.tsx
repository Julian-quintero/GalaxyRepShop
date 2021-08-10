import React from "react";
import { ProductAddToCartt } from "../components/products/ProductAddToCart";
import { Stack, SimpleGrid } from "@chakra-ui/react";
import { useProducts } from "../hooks/useProducts";
import { Skele } from "../components/other/Skele";
import { TextBig } from "../components/other/TextBig";
import { Link } from "react-router-dom";
export const HomeScreen = ({ match }: any) => {
  const keyword = match.params.keyword;
  const { products, loading, error } = useProducts();

  return (
    <>
      <TextBig></TextBig>

      {loading ? (
        <Skele></Skele>
      ) : (
        <Stack
          direction={["column", "column", "column", "row"]}
          w="full"
          align={"center"}
          wrap="wrap"
          justify-content="space-around"
        >
          <SimpleGrid columns={[1, 2, 3, 4]}>
            {products.map((item: any) => (
       
              <ProductAddToCartt product={item}></ProductAddToCartt>
 
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </>
  );
};
