const ITEM_FROM_LOCAL = 'ITEM_FROM_LOCAL'


export const rootReducer = (state = { }, action:any) => {
    switch (action.type) {
      case ITEM_FROM_LOCAL:
        const item = action.payload
        console.log(item)
        
        
        return {       
          cart: item

        };  
  
      default:
        return state;
    }
  };