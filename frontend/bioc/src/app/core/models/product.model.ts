export class Product {
    constructor(
        public name: string,
        public price: number,
        public description: string,
        public images: Array<string>,
        public discount: number,
        public category: string,
        public inStock: boolean
    ) { }
}

