
import { Dispatch } from "redux";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants";

interface RootState {
  rootState: { cart: cartAddItem[] };
  cartReducer: {shippingAddress: formData};
}


interface cartAddItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}



interface formData {
  address: string;
  city: string;
  postalC: string;
  country: string;
}



export const createOrder = (order:any) => {

    return async (dispatch:Dispatch, getState:any) => {
      dispatch({ type: ORDER_CREATE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      try {
        const res = await fetch(`/api/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify(
            order         
          ),
        });
  
        const data = await res.json();

        if (data.message) {
            throw new Error(data.message); //esto es provicional, lo puse por que habia un error hay que solucionar
        }
  
      
      
        dispatch({
          type: ORDER_CREATE_SUCCESS,
          payload: data,
        });
  
        //me logeo al registrarme
      } catch (error:any) {
        dispatch({
          type: ORDER_CREATE_FAIL,
          payload:
            error!.response && error!.response.data.message
              ? error!.response.data.message
              : error!.message,
        });
      }
    };
  };