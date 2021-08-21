export interface cartAddItem {
    product: string;
    name: string;
    image: string;
    price: number;
    countInStock: number;
    qty: number;
  }
  
 export interface cartReducerAction {
    type: string;
    payload: cartAddItem;
  }