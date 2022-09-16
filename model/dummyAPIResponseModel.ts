export interface dummyAPIResponseModel {
  products: productModel[];
  total: number;
  skip: number;
  limit: number;
}

export interface productModel {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
