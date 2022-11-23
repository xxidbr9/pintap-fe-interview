// export interface ProductListEntity {
//   id: string;
//   name: string;
//   stock: number;
//   image_thumbnail: string;
//   price: number;
// }

export interface Product {
  id: number | string; 
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductListEntity {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}