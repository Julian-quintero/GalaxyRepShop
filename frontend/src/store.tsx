import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import {
  productDetailsReducer,
  productListReducer
} from "./reducers/productReducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
} //declaration for devtools since it doesn't have one


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer

});

const initialState = {};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
