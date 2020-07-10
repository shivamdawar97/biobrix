import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartApiService, OrderDetail} from '../../../core/http/cart-api.service';
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
      this.razorpayPaymentService.initiatePayment(this.orderId, this.form.getRawValue()).subscribe(order => {
        this.payWithRazor(order)
      });
    }
  }

  private payWithRazor(order: OrderDetail) {

    const options: any = {
      key: 'rzp_test_htUikbcBMPbM6C',
      amount: order.total, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Biobrix', // company name or product name
      description: 'Healthcarre',  // product description
      image: '../../../../assets/BIOBRIX_LOGO.svg', // company logo or product image
      order_id: order.payment_id, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      prefill : {
        name: order.user_name,
        email: order.email,
        contact: order.phone_number
      },
      // notes: {
      //   // include notes if any
      // },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      // call backend api to verify payment signature & capture transaction
      this.verifyPayment(response)

    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });

    const rzp = new this.windowRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

  verifyPayment(response: any) {
    this.razorpayPaymentService.verifyPayment({
      ...response,
      order_id: this.orderId
    }).subscribe(data => {
        console.log('Success!! Order Placed')
    })
  }

  // razorpay_order_id: "order_FCUg1zC0k6rlVv"
  // razorpay_payment_id: "pay_FCUgrUdI4x8T39"
  // razorpay_signature: "0ef2193fb5ade55760525fb94d548cb752cca1d02bc1f49da6b53f32a5a18a26"
}
