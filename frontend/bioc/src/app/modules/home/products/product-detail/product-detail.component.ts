import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Review } from 'src/app/core/models/review.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductApiService } from 'src/app/core/http/product-api.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { ProductDetail } from 'src/app/core/models/product-detail.model';
import {Product} from '../../../../core/models/product.model';
import {CartService} from '../../../../core/services/cart.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [DatePipe]
})
export class ProductDetailComponent implements OnInit {

  form: FormGroup;
  similarProductTag = '';
  productId: string;
  product: ProductDetail;
  review: Review;
  similarProducts = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private cartService: CartService,
    private router: Router,
    private utilityService: UtilityService,
    private datePipe: DatePipe
    ) {
    this.form = new FormGroup({
      reviewer_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      review: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      date: new FormControl(new Date())
    });
  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('productId');
    this.utilityService.showLoader.next(true);
    this.productService.getPorductDetail(this.productId).subscribe(product => {
      console.log(product);
      this.product = product;
      console.log(product)
      if (this.product.tags.length) {
        this.similarProductTag = this.product.tags[0];
        this.getSimilarProducts();
      }
      this.utilityService.showLoader.next(false);
    });
  }

  onSubmit() {
    this.utilityService.showLoader.next(true);
    const myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.productService.addReview({...this.form.value, product_id: this.product._id, date: myDate}).subscribe(res => {
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
    this.form.reset();
  }

  getSimilarProducts() {
    if (this.similarProductTag) {
      this.productService.getSimilarProducts(this.similarProductTag).subscribe(res => {
        if (res) {
          const recents = res;
          for (let i = 0; i < recents.length; i = i + 4) {
            this.similarProducts.push(res.slice(i, i + 4));
          }
        }
      });
    }
  }

  showProductList(tag: string) {
    this.router.navigate(['/', 'products', 'all'], {queryParams: { tag }});
  }
}
