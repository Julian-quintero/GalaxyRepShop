import axios from "axios";
import { Dispatch } from "redux";
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUESTS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUESTS,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUESTS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUESTS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUESTS,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/productsConstants";

interface listProducts{

  type:string;
  payload?: any;
}


export const listProducts = (keyword='') => {

  return async (dispatch:Dispatch) => {
    try {
      dispatch<listProducts>({
        type: PRODUCT_LIST_REQUEST,
      });

      const res = await fetch(`/api/products?keyword=${keyword}`);
      const data = await res.json();

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export interface productInterface {
  rating:       number;
  numReviews:   number;
  price:        number;
  countInStock: number;
  _id:          string;
  name:         string;
  image:        string;
  description:  string;
  brand:        string;
  category:     string;
  user:         string;
  reviews:      any[];
  __v:          number;
  createdAt:    Date;
  updatedAt:    Date;
}

export const listProductsDetails = (id:string | undefined) => {  

  

   
    
  return async (dispatch:Dispatch) => {
    try {
      dispatch({
        type: PRODUCT_DETAILS_REQUESTS,
      });

      const res = await fetch(`/api/products/${id}`);
      const data:productInterface = await res.json();

      
      

    
      

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

