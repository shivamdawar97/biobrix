import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  productId: string
  product: Product
  rate = 0

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId']
    this.product = {
       product_name: 'Ageless -Total resurfacing masque',
       product_id: this.productId,
       price: 250,
       description: 'I dont know what is this Aadads jkv ds skd cdaka sxasxnasxjk axksj',
       image: 'https://storage.needpix.com/rsynced_images/atopiclair-884211_1280.jpg',
       discount: 0,
       category: 'Skin Lightening',
       inStock: true,
       addedToCart: false,
       ingredients: ["Mulethi","Chunna","Kathha"],
       reviews: [new Review(5,'deepak','ewefefw','good good','11/12/21')]
    }
    console.log('product id: '+this.productId)
  }

}
