import {Category} from './category.model';

export interface RecentProduct {
  images: string[];
  ingredients: string[];
  in_stock: boolean;
  is_recent: boolean;
  _id: string;
  product_name: string;
  description: string;
  price: number;
  discount_percentage: number;
  category: Category;
  reviews: string[];
  __v: number;
}
