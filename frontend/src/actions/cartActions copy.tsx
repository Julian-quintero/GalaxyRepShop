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
      console.log('se cumplio');      
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

     
  console.log('el root es:',Object.keys(getState().rootState).length );
  console.log('el reducer es:',getState().cartReducer.cartItems.length );
  
     
      if (result2.length!==0) {
        combine = [...getState().cartReducer.cartItems,...result2]
        console.log(' entre al if');
        
      }else if(result2.length!==0 && Object.keys(getState().rootState).length!==0){

        console.log(' entre al otro if');

        combine = [...getState().cartReducer.cartItems,...result2]
      }else if(Object.keys(getState().rootState).length===0 && result2.length!==0){
        console.log(' entre al otro if 2');
        cartItemsFromLocalStorageAfterCartClick = localStorage.getItem("cartItems") 
        result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick)
        combine = [...getState().cartReducer.cartItems,...result2]

      }else if (Object.keys(getState().rootState).length===0 && getState().cartReducer.cartItems.length !==0 && cartItemsFromLocalStorageAfterCartClick2){
        console.log(' entre al otro if 3');
        cartItemsFromLocalStorageAfterCartClick = localStorage.getItem("cartItems") 
        result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick)
        combine = [...getState().cartReducer.cartItems,...result2]
      }
     
      else{
        console.log(' entre al else');
        combine = getState().cartReducer.cartItems
      }


    

      console.log('combine',combine);
      

 
      
  
        localStorage.setItem(
          "cartItems",
           JSON.stringify(combine)
        );
      
    }

  

      let cartItemsFromLocalStorage:any = localStorage.getItem("cartItems")
      let result =[] as any[]
      if (cartItemsFromLocalStorage) {
        console.log("aca");
        result = JSON.parse(cartItemsFromLocalStorage)
        dispatch(cartItemsLoad( result))
       }else
       {
         console.log("no se cumplio");
         
       }  
  };
};