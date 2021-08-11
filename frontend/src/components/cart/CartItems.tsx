import React,{ useState} from 'react'
import {
    Image,  
    Text, 
    Divider,
    Select,
    Flex,
    Button,  
  } from "@chakra-ui/react";
  import { BiCart } from "react-icons/bi";
import { cartItem, productInterface } from '../../actions/interfaces/product';
export const CartItems = ({product}:cartItem) => {
  const [qty, setQty] = useState(1)
  
    return (
  
        <>
        <Flex align="center" flexDirection={["column", "column", "column", "row"]} >
          <Image
            boxSize="150px"
            objectFit="cover"
            src={product.image}
            alt="Segun Adebayo"
            minw="sm"
            maxw="sm"
            rounded="lg"
          />

          <Text fontSize="md"  color="black" m={1}>
           {product.name}
          </Text>

          <Text fontSize="md"  color="black" m={1}>
            ${product.price}
          </Text>



          <Select w={20} ml={1} value={product.qty} onChange={(e)=>{setQty(Number(e.target.value))}} color="black">
                {Array.from(Array(product.countInStock).keys()).map(
                  (i, index) => (
                    <option key={index + 1}>{index + 1}</option>
                  )
                )}
              </Select>

            <Button leftIcon={<BiCart></BiCart>} colorScheme="red" m={2}>
          Delete
        </Button>  
    
        </Flex>
        <Divider mt={3} mb={3}></Divider> 
        </>
    )
}
