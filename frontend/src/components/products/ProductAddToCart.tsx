import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Spinner
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import React from "react";
import { Link } from "react-router-dom";
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

interface CardProps {
  _id: string;
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

interface Props {
  product:CardProps
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export const ProductAddToCartt = ({product}:Props) => {


  
  return (
    <Flex p={10}  alignItems="center" justifyContent="center" >
             <Link to={`/product/${product._id}`}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
       
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={product.image}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          fallback={<Spinner w="250px" h="250px"></Spinner>}
          boxSize="250px"
          objectFit="cover"
          border="30px"
           borderColor="black"
           borderWidth="30px"
        />

        <Box p="3">
        
          <Box d="flex" alignItems="baseline">
        
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
           
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
          
            </Box>

          </Flex>
         
        </Box>
       
      </Box>
      </Link>
    </Flex>
  );
};
