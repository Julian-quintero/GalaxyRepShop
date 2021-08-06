import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer
} from "./reducers/productReducers";


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate:productCreateReducer,
  productUpdate:productUpdateReducer,
  productReviewCreate:productReviewCreateReducer
});

const initialState = {};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
