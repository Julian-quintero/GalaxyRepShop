const ITEM_FROM_LOCAL = 'ITEM_FROM_LOCAL'


export const rootReducer = (state = { cart:{cartItems:{}} }, action:any) => {
    switch (action.type) {
      case ITEM_FROM_LOCAL:
        return {
          loading: true,
          products: [] as any[],
        };  
  
      default:
        return state;
    }
  };