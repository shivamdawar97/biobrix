export class Review {
  constructor(
        public rating: number,
        public reviewer_name : string,
        public email: string,
        public review: string,
        public date: string
  ) {}
}
