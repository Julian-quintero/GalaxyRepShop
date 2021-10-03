import { Badge, Box, Heading, Text,Button } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { HiBriefcase, HiCursorClick } from 'react-icons/hi'
import { ButtonRadioGroup } from './ButtonRadioGroup'
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from '../../actions/cartActions';
import { RouteComponentProps } from 'react-router-dom';
import { useHistory } from "react-router-dom";


interface RootState {
  cartReducer: { shippingAddress: formData };
}

interface formData {
  address: string;
  city: string;
  postalC: string;
  country: string;
}

export const ChoosePayment = () => {


  const [paymentMethod, setpaymentMethod] = useState('mercadoPago')
  let history = useHistory();


  const dispatch = useDispatch();
  
  const cart = useSelector((state:RootState) => state.cartReducer)

  const { shippingAddress } = cart;

  const submitHandler = (e: React.FormEvent) => {   
    e.preventDefault()
      dispatch(savePaymentMethod({paymentMethod}));
      history.push("/placeorder");
    };
  

if (!shippingAddress) {
    history.push("/shipping")
    
}

  return (
    <Box as="section" py="12">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box textAlign="center" mb="10">
    
          <Heading size="lg" fontWeight="extrabold" mt="6" mb="2">
            Choose payment method
          </Heading>
      
        </Box>
        <Box maxW="xl" mx="auto">
          <ButtonRadioGroup
            defaultValue="analytics"
            options={[
              {
                label: 'Mercado Pago',
                description: 'For websites, apps and digital products',
                icon: <HiBriefcase />,
                value: 'analytics',
              },
           
            ]}
          />
          <Box mx="auto" textAlign="center" mb="10" >
            <Button mt={4} colorScheme="blue"  type="submit" onClick={(e)=>submitHandler(e)}>
              Continue
            </Button>
            </Box>
        </Box>
      
      </Box>

    </Box>
  )
}
