import React from "react";
import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

import { Dispatch } from "redux";
import {productInterface} from "./interfaces/product"
import { cartItemsLoad } from "./rootActions";




export const addToCart = (id:string|undefined, qty:number) => {
  return async (dispatch:Dispatch<any>, getState:any) => {  
  

    if (id) {
      const res = await axios.get<productInterface>(`/api/products/${id}`);
      const data = res.data
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        },
      });     
  
        localStorage.setItem(
          "cartItems",
           JSON.stringify(getState().cartReducer.cartItems)
        );
      
    }

  

      let cartItemsFromLocalStorage:any = localStorage.getItem("cartItems")
      let result =[] as any[]
      if (cartItemsFromLocalStorage) {
   
        result = JSON.parse(cartItemsFromLocalStorage)
        dispatch(cartItemsLoad( result))
       }else
       {

         
       }  
  };
};

export const removeFromCart = (id:string) => {
  return (dispatch:Dispatch<any>, getState:any) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    dispatch(cartItemsLoad(getState().cartReducer.cartItems))

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartReducer.cartItems)
    );
  };
};

interface formData {
  address:string
  city:string
  postal:string
  country:string
}

interface paymentData {
  paymentMethod:string
  
}



export const saveShippingAddress = (data:formData) => {
  return (dispatch:Dispatch) => {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };
};


export const savePaymentMethod = (data:paymentData) => {
  return (dispatch:Dispatch) => {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });

    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };
};

