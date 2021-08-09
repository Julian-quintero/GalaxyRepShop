import { useEffect} from "react"
import { useDispatch,useSelector } from "react-redux";
import { listProducts, listProductsDetails } from "../actions/productActions";
import {RouteComponentProps } from 'react-router-dom';

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

export const useDetails = (id: string | undefined) => {

       
    const dispatch = useDispatch()
    
    const productDetails = useSelector((state:any)=> state.productDetails)     
    //state as any is temporal, should define complete state 
    const {loading,error,product} = productDetails
 

    useEffect(() => {
        dispatch(listProductsDetails(id))
    }, [dispatch])

    return {
        product,
        loading,
        error
    }
}
