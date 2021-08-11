import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

  interface cartAddItem  {
    product:string,
    name:string, 
    image: string, 
    price: number,
    countInStock: number,
    qty:number
 }

  interface cartReducer {
      type: string;
      payload: cartAddItem
  }

  


export const cartReducer = (state = { cartItems: [] as any[] ,shippingAddress:{} }, action:cartReducer) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      
      
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
          //for each product
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          //if item doesn't exist add it.
        };
      }

    default:
      return state;
  }
};
