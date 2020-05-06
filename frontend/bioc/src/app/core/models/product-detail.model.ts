import { Review } from './review.model';

export class ProductDetail {
  constructor(
      public product_name: string,
      public _id: string,
      public price: number,
      public description: string,
      public images: string[],
      public ingredients: string[],
      public tags: string[],
      public discount: number,
      public in_stock: boolean,
      public category: string,
      public discount_percentage: number,
      public reviews: Review[],
      public addedToCart?: boolean
  ) { }
}
