import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";

import {
  productDetailsReducer,
  productListReducer
} from "./reducers/productReducers";
import { rootReducer } from "./reducers/rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
} //declaration for devtools since it doesn't have one


interface test {
  rootState:{cart:{}},
  productList:{
    loading:boolean,
    products: any[];

  }, 
  productDetails:{product:{}}, 
  cartReducer:{cartItems:any[],shippingAddress:{}}
}

const reducer = combineReducers({
  rootState: rootReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cartReducer: cartReducer

});


// let cartItemsFromLocalStorage = localStorage.getItem("cartItems")
// if (cartItemsFromLocalStorage) {
//   JSON.parse(cartItemsFromLocalStorage)
// }




const initialState = {

};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
