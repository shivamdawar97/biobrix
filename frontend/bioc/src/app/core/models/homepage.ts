import {Category} from './category.model';

export interface Homepage {
  pagerProducts: {
    _id: string,
    product_id: string,
    image_url: string,
    __v: number
  }[];
  recentProducts: {
    images: string[],
    ingredients: string[],
    in_stock: boolean,
    is_recent: boolean,
    _id: string,
    product_name: string,
    description: string,
    price: number,
    discount_percentage: number,
    category: Category,
    reviews: string[],
    __v: number
  };
  testimonies: string[];
}
