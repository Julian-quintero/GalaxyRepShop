import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";

import {
  productDetailsReducer,
  productListReducer
} from "./reducers/productReducers";
import { rootReducer } from "./reducers/rootReducer";
import { userLoginReducer } from "./reducers/userReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
} //declaration for devtools since it doesn't have one




const userInfoFromLocalStorage:any = localStorage?.getItem("userInfo")
  ? JSON.parse(localStorage?.getItem("userInfo") || '{}') 
  : null;

  const shippingAddressFromLocalStorage:any = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress") || '{}')
  : {}
  



const reducer = combineReducers({
  rootState: rootReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cartReducer: cartReducer,
  userLogin:userLoginReducer

});


// let cartItemsFromLocalStorage = localStorage.getItem("cartItems")
// if (cartItemsFromLocalStorage) {
//   JSON.parse(cartItemsFromLocalStorage)
// }




const initialState = {
  userLogin: {userInfo:userInfoFromLocalStorage},
  cartReducer:{cartItems:[],shippingAddress:shippingAddressFromLocalStorage}
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
