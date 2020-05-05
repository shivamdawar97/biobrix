import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/core/models/review.model';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { ProductApiService } from 'src/app/core/http/product-api.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { ProductDetail } from 'src/app/core/models/product-detail.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private utilityService: UtilityService) {
    this.form = new FormGroup({
      reviewer_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      review: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      date: new FormControl(new Date())
    });
  }

  productId: string;
  product: ProductDetail;
  rate = 0;
  review: Review;

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('productId');
    this.utilityService.showLoader.next(true);
    this.productService.getPorductDetail(this.productId).subscribe(product => {
      console.log(product);
      this.product = product;
      this.utilityService.showLoader.next(false);
    });

  }

  onSubmit() {
    this.utilityService.showLoader.next(true);
    this.productService.addReview({...this.form.value, product_id: this.product._id}).subscribe(res => {
      this.utilityService.showLoader.next(false);
    }, err => this.utilityService.showLoader.next(false));
    this.form.reset();
  }


}
