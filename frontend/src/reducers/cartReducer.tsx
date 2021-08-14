import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

interface cartAddItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

interface cartReducer {
  type: string;
  payload: cartAddItem;
}

function checkIfItemExists(arr:any,item:any) {

  console.log('arr',arr);
  console.log('item',item);
  
  

  const existItem = arr.find((x:any) => x.product === item.product);
  let resultArray  

  if (existItem) {
    console.log('existItem',existItem);  
    resultArray = arr.map((x:any) =>
    x.product === existItem.product ? item : x
  )
    
  }else{
    console.log('no existItem',existItem);  
    resultArray = [...arr,item]   
  }


  return resultArray    
}

export const cartReducer = (
  state = { cartItems: [] as any[], shippingAddress: {} },
  action: cartReducer
) => {
  const cartItemsFromLocalStorageAfterCartClick = localStorage.getItem("cartItems") 
  const item = action.payload;
  let result2:any
  let existItem:any
  let test = [] as any[]
  switch (action.type) {
    case CART_ADD_ITEM:
      
      
     

      if (cartItemsFromLocalStorageAfterCartClick) {  
        
        result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick)
        result2 = checkIfItemExists(result2,item)     
      }else{
        result2 = item
      }

      if (!Array.isArray(result2)) {
        
         existItem =  state.cartItems.find((x:any) => x.product === item.product);   
         console.log('existItem',existItem);  
      }

      // console.log('result2',result2);
      // console.log('state.cartItems',state.cartItems);
      // const existItem =  state.cartItems.find((x:any) => x.product === item.product);   

      
      

      if (existItem) {
        console.log("existe");
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
          //for each product
        };
      } else {
        console.log("noexiste agregando");
        return {
          ...state,
          cartItems: Array.isArray(result2) ? [...result2] : [...test,result2],
          //if item doesn't exist add it.
        };
      }

      case CART_REMOVE_ITEM:

        if (cartItemsFromLocalStorageAfterCartClick) {        
          result2 = JSON.parse(cartItemsFromLocalStorageAfterCartClick) 
        }else{
          result2 = item
        }

      
        return {
          ...state,
          cartItems: result2.filter(
            (item:any) => item.product !== action.payload
          ),
        };

      

    default:
      return state;
  }
};
