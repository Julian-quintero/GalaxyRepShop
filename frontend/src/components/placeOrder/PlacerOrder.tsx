import React,{useState,useEffect} from 'react'
import {
    SimpleGrid,
    Box,
    Center,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex,
    Text,
    Tfoot,
    Divider,
    Heading
  } from "@chakra-ui/react";
import { CartItems } from '../cart/CartItems';
import { singleProduct } from '../../actions/interfaces/product';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

declare global {
  interface Window {
    MercadoPago: any;
  }
}

interface RootState {
  rootState: { cart: { cartItems: {} } };
  cartReducer: {};
}





export const PlacerOrder = () => {


  const FORM_ID = 'payment-form';

  const [preferenceId, setPreferenceId] = useState<null | string>(null);
  




  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    axios.post('/api/payments/mercadopago').then((item:any) => {
      setPreferenceId(item.data.idpago)

      
    });
  }, []);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      console.log(preferenceId)
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
      'https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js';
    script.setAttribute('data-preference-id', preferenceId);
    const form = document.getElementById(FORM_ID);
    form?.appendChild(script);
    }
  }, [preferenceId]);



    const cart: any = useSelector((state: RootState) => state.rootState.cart);




    return (
    
        <form id={FORM_ID} method="GET" />
     
             
    )
}
