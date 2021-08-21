import { useEffect,useState} from "react"
import { useDispatch,useSelector } from "react-redux";

interface RootState {
  rootState: {cart:{}},
  cartReducer:{}
}

export const useGetLocalS = () => {

    const [cartItemsFromLocal, setcartItemsFromLocal]:any = useState()
    const [loading, setloading] = useState(true)
    let cartItemsFromLocalStorage:any = localStorage.getItem("cartItems")
    let result =[] as any[]
    const cart:any = useSelector((state:RootState) => state.rootState.cart)  
    useEffect(() => {

   
      
      
        if (cartItemsFromLocalStorage) {
          result = JSON.parse(cartItemsFromLocalStorage)

          setcartItemsFromLocal(result)
          setloading(false)
         }else
         {

           
         }  
      
     
    }, [loading,setcartItemsFromLocal,cart])
    



    return {
        loading,
        cartItemsFromLocal,
        cart
        
    }
}