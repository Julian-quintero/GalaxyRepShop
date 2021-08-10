import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";



//@desc  Fetch single product
//@route GET /api/products/:id
//@acess Public
const getProductById = asyncHandler(async (req, res) => {

 
    const product = await Product.findById(req.params.id);    
    res.send(product);
});


//@desc  Fetch all products
//@route GET /api/products
//@acess Public
const getProducts = asyncHandler(async (req, res) => {
  console.log(req.body);
  //keyword is used when search for specific product
 const keyword = req.query.keyword ? {
   name:{
     $regex: req.query.keyword,
     $options: 'i'
   }
 }: {}
 const products = await Product.find({...keyword});
 
 res.json(products);
});

export { getProductById,getProducts };
