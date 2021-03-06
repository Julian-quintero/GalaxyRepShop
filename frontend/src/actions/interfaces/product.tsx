export interface productInterface {
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  user: string;
  reviews: any[];
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface singleProduct {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface cartItem {
  product: singleProduct;
}

export interface product {
  products: Array<productInterface>;
}

export interface productList {
  type: string;
  payload: productInterface[];
}

export interface productDetails {
  type: string;
  payload: productInterface;
}
