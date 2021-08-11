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




export const addToCart = (id:string, qty:number) => {
  return async (dispatch:Dispatch, getState:any) => {

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
  };
};