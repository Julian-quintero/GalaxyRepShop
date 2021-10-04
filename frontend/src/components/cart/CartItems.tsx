import React, { useState } from "react";
import { Image, Text, Divider, Select, Flex, Button } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import {
  cartItem,
  productInterface,
  singleProduct,
} from "../../actions/interfaces/product";
import Lottie from "react-lottie";
import animationData from "../../lottie/9825-loading-screen-loader-spinning-circle.json";
import { removeFromCart } from "../../actions/cartActions";
import { useDispatch } from "react-redux";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const CartItems = ({
  product,
  placeOrder = false,
}: {
  product: singleProduct;
  placeOrder?: boolean;
}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Flex
        align="center"
        w="100%"
        flexDirection={["column", "column", "column", "row"]}
        justify={
          !placeOrder
          ?
          [
          "space-around",
          "space-around",
          "space-evenly",
          "space-evenly",
        ]
        :
        [
          "space-around",
          "space-around",
          "space-around",
          "space-around",
        ]
      }
      >
        <Image
          boxSize={!placeOrder ? "150px" : "100px"}
          objectFit="cover"
          src={product.image}
          alt="Segun Adebayo"
          minw="sm"
          maxw="sm"
          rounded="lg"
          fallback={
            <Lottie options={defaultOptions} height={150} width={150} />
          }
        />

        <Text
          fontSize={!placeOrder ? "md" : "sm"}
          align="center"
          w={
            !placeOrder ?
            
            ["100%", "100%", "100%", "10%"]

            :
            ["100%", "100%", "100%", "100%"]
          }
          color="black"
          m={1}
        >
          {product.name}
        </Text>

        <Text
         fontSize={!placeOrder ? "md" : "sm"}
          align="center"
          w={["100%", "100%", "100%", "10%"]}
          color="black"
          m={1}
        >
          ${product.price}
        </Text>


        { !placeOrder?

        <Select
          align="center"
          w={20}
          ml={1}
          value={product.qty}
          onChange={(e) => {
            setQty(Number(e.target.value));
          }}
          color="black"
        >
          {Array.from(Array(product.countInStock).keys()).map((i, index) => (
            <option key={index + 1}>{index + 1}</option>
          ))}
        </Select>
        :null

        }

        {!placeOrder ? (
          <Button
            align="center"
            w={15}
            leftIcon={<BiCart></BiCart>}
            colorScheme="red"
            m={2}
            onClick={() => removeFromCartHandler(product.product)}
          >
            Delete
          </Button>
        ) : null}
      </Flex>
      <Divider mt={3} mb={3}></Divider>
    </>
  );
};
