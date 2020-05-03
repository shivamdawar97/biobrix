import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { Review } from 'src/app/core/models/review.model';
import { NgForm } from '@angular/forms';
import { ProductApiService } from 'src/app/core/http/product-api.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { ProductDetail } from 'src/app/core/models/product-detail.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('reviewForm',{static:true}) reviewForm: NgForm

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private utilityService: UtilityService) { }

  productId: string
  product: ProductDetail
  rate = 0
  review: Review

  ngOnInit(): void {

    this.productId = this.route.snapshot.params['productId']
    this.utilityService.showLoader.next(true);
    this.productService.getPorductDetail(this.productId).subscribe(product=>{
      this.product=product
      this.utilityService.showLoader.next(false);
    })

  }

  onSubmit(){
    //console.log(form)
    //this.submitted = true

    console.log(this.reviewForm.value)
    this.review =  {
      reviwer_name : this.reviewForm.value.username,
      email : this.reviewForm.value.username,
      review : this.reviewForm.value.username,
      raing : this.reviewForm.value.username,
      date: 'asdsdas'
    }

    // this.review.reviwer_name = this.reviewForm.value.username
    // this.review.email = this.reviewForm.value.email
    // this.review.review = this.reviewForm.value.review
    // this.review.raing = this.reviewForm.value.rating
    console.log(this.review)
    this.reviewForm.reset()
  }


}
