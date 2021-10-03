import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { CheckoutSteps } from '../components/CheckoutSteps/CheckoutSteps'
import { useSelector,useDispatch } from "react-redux";
import { savePaymentMethod } from '../actions/cartActions';
import { ChoosePayment } from '../components/choosePayment/ChoosePayment';

interface RootState { 
    cartReducer: {shippingAddress:formData};
  }


  
  interface formData {
    address:string
    city:string
    postalC:string
    country:string
  }

  interface Props{
      history:RouteComponentProps
  }



export const PaymentScreen = () => {





    return (
        <div>

            <CheckoutSteps step3={true}></CheckoutSteps>

            <ChoosePayment ></ChoosePayment>
            
        </div>
    )
}
