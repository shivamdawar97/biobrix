import { Review } from './review.model';

export class Product {
    constructor(
        public product_name: string,
        public product_id: string,
        public price: number,
        public description: string,
        public image: string,
        public discount: number,
        public inStock: boolean,
        public category?: string,
        public addedToCart?: boolean,
        public quantity?: number,
        public total?: number,
        public ingredients?: Array<string>,
        public reviews?: Array<Review>
    ) { }
}

