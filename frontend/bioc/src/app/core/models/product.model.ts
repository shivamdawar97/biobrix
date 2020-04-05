export class Product {
    constructor(
        public product_name: string,
        public product_id: string,
        public price: number,
        public description: string,
        public image: string,
        public discount: number,
        public inStock: boolean,
        public addedToCart?: boolean
    ) { }
}

