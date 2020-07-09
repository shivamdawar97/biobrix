import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartApiService} from '../../../core/http/cart-api.service';
import {CartService} from '../../../core/services/cart.service';
import {Product} from '../../../core/models/product.model';
import { WindowRefService } from 'src/app/window-ref.service';
import { RazorpayPaymentService } from 'src/app/core/http/razorpay-payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  orderId: string;

  form: FormGroup;
  isOtpSent = false;
  isPhoneVerified = true;
  otpField = new FormControl();
  products: Product[] = [];
  total = 0;
  subtotal = 0;

  constructor(private route: ActivatedRoute,
              private cartApiService: CartApiService,
              private razorpayPaymentService: RazorpayPaymentService,
              private cart: CartService,
              private router: Router,
              private windowRef: WindowRefService
              ) {

    this.orderId = this.route.snapshot.queryParamMap.get('order_id');

    if (!this.orderId) {
      console.log('No order id present');
      this.router.navigate(['/view-cart']);
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

  // makePayment() {
  //   // use payment api for payment -> open order detail page

  //   console.log('from value is ', this.form.value);
  //   this.router.navigate(['/', 'payment'], { queryParams: {
  //     order_id: this.orderId,
  //       email: this.form.get('email').value,
  //       phone: this.form.get('phone_number').value,
  //       amount: this.total
  //     }});
  //   // this.updateOrder();
  // }
  makePayment() {
    if(this.form.valid) {
      this.razorpayPaymentService.initiatePayment(this.orderId, this.form.getRawValue()).subscribe(res => {
          console.log(res);
      });
    }
  }

  payWithRazor(val) {
    const options: any = {
      key: 'rzp_test_key',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: './assets/logo.png', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.windowRef.nativeWindow.Razorpay(options);
    rzp.open();
  }



}
