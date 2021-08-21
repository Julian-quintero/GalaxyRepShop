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
  return async (dispatch:any, getState:any) => {

    let combine
    let cartItemsFromLocalStorageAfterCartClick:any
    let cartItemsFromLocalStorageAfterCartClick2 = localStorage.getItem("cartItems") 
    
    
    let result2 = []
    if ( getState().cartReducer.cartItems.length ===0 && Object.keys(getState().rootState).length!==0) {  
       
      cartItemsFromLocalStorageAfterCartClick = localStorage.getItem("cartItems") 
      result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick)
    }

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

  
     
      if (result2.length!==0) {
        combine = [...getState().cartReducer.cartItems,...result2]
     
        
      }else if(result2.length!==0 && Object.keys(getState().rootState).length!==0){



        combine = [...getState().cartReducer.cartItems,...result2]
      }else if(Object.keys(getState().rootState).length===0 && result2.length!==0){
    
        cartItemsFromLocalStorageAfterCartClick = localStorage.getItem("cartItems") 
        result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick)
        combine = [...getState().cartReducer.cartItems,...result2]

      }else if (Object.keys(getState().rootState).length===0 && getState().cartReducer.cartItems.length !==0 && cartItemsFromLocalStorageAfterCartClick2){
      
        cartItemsFromLocalStorageAfterCartClick = localStorage.getItem("cartItems") 
        result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick)
        combine = [...getState().cartReducer.cartItems,...result2]
      }
     
      else{
     
        combine = getState().cartReducer.cartItems
      }


    

    
      

 
      
  
        localStorage.setItem(
          "cartItems",
           JSON.stringify(combine)
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