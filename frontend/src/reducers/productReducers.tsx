import { PRODUCT_DETAILS_REQUESTS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_DELETE_REQUESTS, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CREATE_RESET, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUESTS, PRODUCT_CREATE_SUCCESS, PRODUCT_UPDATE_REQUESTS, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET, PRODUCT_DETAILS_RESET, PRODUCT_CREATE_REVIEW_FAIL, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_REQUESTS, PRODUCT_CREATE_REVIEW_RESET } from "../constants/productsConstants";

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


interface cartReducer {
    type: string;
    payload: productInterface[]
}

interface cartReducer2 {
  type: string;
  payload: productInterface
}


export const productListReducer = (state = { products: [] as any[] }, action:cartReducer) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [] as any[],
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export const productDetailsReducer = (state = { product:{reviews:[]} } /**initial state */, action:cartReducer2) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUESTS:
      return {
        loading: true,
        ...state,
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

      case PRODUCT_DETAILS_RESET:
        return {     
        };

    default:
      return state;
  }
};



