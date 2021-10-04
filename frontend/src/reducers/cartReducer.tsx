import { cartAddItem, cartReducerAction } from "../actions/interfaces/cart";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

function checkIfItemExists(arr: cartAddItem[], item: cartAddItem) {
  const existItem = arr.find((x: any) => x.product === item.product);
  let resultArray;

  if (existItem) {
    resultArray = arr.map((x: any) =>
      x.product === existItem.product ? item : x
    );
  } else {
    resultArray = [...arr, item];
  }

  return resultArray;
}

export const cartReducer = (
  state = { cartItems: [] as any[], shippingAddress: {} },
  action: cartReducerAction
) => {
  const cartItemsFromLocalStorageAfterCartClick =
    localStorage.getItem("cartItems");
  const item = action.payload;
  let cartItems: any;
  let existItem: cartAddItem | undefined;
  let cartReplace: Array<cartAddItem> = [];
  switch (action.type) {
    case CART_ADD_ITEM:
      if (cartItemsFromLocalStorageAfterCartClick) {
        const parsedState = JSON.parse(cartItemsFromLocalStorageAfterCartClick);
        cartItems = checkIfItemExists(parsedState, item);
      } else {
        cartItems = item;
      }

      if (!Array.isArray(cartItems)) {
        existItem = state.cartItems.find(
          (x: any) => x.product === item.product
        );
      }

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem?.product ? item : x
          ),
          //for each product
        };
      } else {
        return {
          ...state,
          cartItems: Array.isArray(cartItems)
            ? [...cartItems]
            : [...cartReplace, cartItems],
          //if item doesn't exist add it.
        };
      }

    case CART_REMOVE_ITEM:
      if (cartItemsFromLocalStorageAfterCartClick) {
        cartItems = JSON.parse(cartItemsFromLocalStorageAfterCartClick);
      } else {
        cartItems = item;
      }

      return {
        ...state,
        cartItems: cartItems.filter((item: any) => {
          return item.product !== action.payload;
        }),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload
             };

    default:
      return state;
  }
};
