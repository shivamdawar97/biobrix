import { Review } from './review.model';

export class Product {
    constructor(
        public product_name: string,
        public product_id: string,
        public price: number,
        public image: string,
        public description?: string,
        public category?: string,
        public addedToCart?: boolean,
        public quantity?: number,
        public total?: number
    ) { }
}

