import axios from "axios"
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";



export const useProducts = () => {
    
    const dispatch = useDispatch()
    const productList = useSelector((state:any)=> state.productList) 
    //state as any is temporal, should define complete state 
    const {loading,error,products} = productList 

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return {
        products,
        loading
    }

}

