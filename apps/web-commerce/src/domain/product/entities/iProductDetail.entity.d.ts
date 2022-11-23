// export interface ProductDetailEntity {
//   id: string;
//   name: string;
//   stock: number;
//   images: string[];
//   price: number;
//   description: string;
//   sku: string;
//   categories: string[];
// }

export interface ProductDetailEntity {
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

