import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartApiService} from '../../../core/http/cart-api.service';
import {CartService} from '../../../core/services/cart.service';
import {Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  orderId: string;

  form: FormGroup;
  isOtpSent = false;
  isPhoneVerified = false;
  otpField = new FormControl();
  products: Product[] = [];
  total = 0;
  subtotal = 0;

  constructor(private route: ActivatedRoute,
              private cartApiService: CartApiService,
              private cart: CartService,
              private router: Router) {

    this.orderId = this.route.snapshot.queryParamMap.get('order_id');

    if (!this.orderId) {
      console.log('No order id present');
      this.router.navigate(['/view_cart']);
    }

    this.products = this.cart.getCartItems();

    this.total = this.products.map(pro => pro.total).reduce((total, value) => total + value);

    this.subtotal = this.total;

    console.log('products ', this.products);
    this.form = new FormGroup({
      phone_number: new FormControl(
        null, [
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.required,
        ]),
      user_name: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      zip_code: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    });
  }

  ngOnInit() {

  }

  getOtp() {
    this.cartApiService.getOtp(this.form.get('phone_number').value).subscribe(res => {
      if (res.status === 'pending') {
        this.isOtpSent = true;
        this.form.get('phone_number').disable();
      }
    });
  }

  verifyOtp() {
    this.cartApiService.verifyOtp(this.form.get('phone_number').value, this.otpField.value).subscribe(res => {
      if (res.status === 'verified') {
        this.isPhoneVerified = true;
      }
    });
  }

  makePayment() {
    // use payment api for payment -> open order detail page

    console.log('from value is ', this.form.value);
    this.updateOrder();
  }

  updateOrder() {
    // update user information at backend
    this.cartApiService.updateOrder(this.orderId, this.form.getRawValue()).subscribe(res => {
      this.router.navigate(['view-cart/order', res._id], { queryParams: { new_order: true}});
    });
  }
}
