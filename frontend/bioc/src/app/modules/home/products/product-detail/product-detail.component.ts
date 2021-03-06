import { Component, OnInit, HostListener } from '@angular/core';
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
  private pa1 = [];
  private pa2 = [];
  private pa3 = [];

  qtyForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    private cartService: CartService,
    private router: Router,
    private utilityService: UtilityService,
    private datePipe: DatePipe,
    private activeRoute: ActivatedRoute
    ) {
    this.form = new FormGroup({
      reviewer_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      review: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      date: new FormControl(new Date())
    });

    this.qtyForm = new FormGroup({
      quantity: new FormControl('1',Validators.min(1))
    })

  }

  ngOnInit(): void {

    this.activeRoute.params.subscribe( params => {
      console.log(params);
      this.productId = params.productId;
      this.utilityService.showLoader.next(true);
      this.productService.getPorductDetail(this.productId).subscribe(product => {
      this.product = product;
      this.product.addedToCart = this.cartService.itemInCart(this.productId);
      if (this.product.tags.length) {
        this.similarProductTag = this.product.tags[0];
        this.getSimilarProducts();
      }
      this.utilityService.showLoader.next(false);
    });
    window.scrollTo(0,0);
    })
  }

  addTocart(){
    if(this.product.addedToCart)
      this.router.navigate(['/view-cart'])
    else if(this.qtyForm.valid) {
      const product = new Product(
        this.product.product_name,
        this.product._id,
        this.product.price,
        this.product.images[0]
        );
      product.quantity = this.qtyForm.value.quantity;
      product.total = product.price;

      this.cartService.addToCart(product);
      this.product.addedToCart = true;
    }

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
            this.pa1.push(recents.slice(i, i + 4));
          }

          for (let i = 0; i < recents.length; i = i + 2) {
            this.pa2.push(recents.slice(i, i + 2));
          }
          recents.forEach( product => this.pa3.push([product]) )
          this.assembelRecentProducts();
        }
      });
    }
  }

  showProductList(tag: string) {
    this.router.navigate(['/', 'products', 'all'], {queryParams: { tag }});
  }

  @HostListener('window:resize',['$event'])
  onResize = _ => this.assembelRecentProducts();

  private assembelRecentProducts() {
    if(window.innerWidth<700) this.similarProducts = this.pa3;
    else if(window.innerWidth<1120) this.similarProducts = this.pa2;
    else this.similarProducts = this.pa1;
  }

}
