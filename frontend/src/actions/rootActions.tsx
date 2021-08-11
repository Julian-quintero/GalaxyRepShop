import axios from "axios";
import { Dispatch } from "redux";

const ITEM_FROM_LOCAL = 'ITEM_FROM_LOCAL'


export const cartItemsLoad = (cartItemsFromLocalStorage:any) => {

    return async (dispatch:Dispatch) => {    
  
        dispatch({
          type: ITEM_FROM_LOCAL,
          payload: cartItemsFromLocalStorage
        });

    };
  };
  