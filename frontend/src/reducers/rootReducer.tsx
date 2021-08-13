const ITEM_FROM_LOCAL = 'ITEM_FROM_LOCAL'


export const rootReducer = (state = { }, action:any) => {
    switch (action.type) {
      case ITEM_FROM_LOCAL:
        const item = action.payload
    
        
        
        return {       
          cart: item

        };  
  
      default:
        return state;
    }
  };