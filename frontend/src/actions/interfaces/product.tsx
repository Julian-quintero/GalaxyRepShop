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
