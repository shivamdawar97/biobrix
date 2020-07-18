import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartApiService, OrderDetail} from '../../../core/http/cart-api.service';
import {CartService} from '../../../core/services/cart.service';
import {Product} from '../../../core/models/product.model';
import { WindowRefService } from 'src/app/window-ref.service';
import { RazorpayPaymentService } from 'src/app/core/http/razorpay-payment.service';
import { UserInfo } from 'src/app/core/models/user-info';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  orderId: string;
  isLoading = false;
  form: FormGroup;
  isOtpSent = false;
  isPhoneVerified = false;
  otpField = new FormControl();
  products: Product[] = [];
  total = 0;
  subtotal = 0;
  isOrderPlaced = false;
  isVerficationFailed = false;
  orderNotFound = false;

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
  }

  ngOnInit() {
      scrollTo(0,0);
      this.isLoading = true;
      this.cartApiService.orderDetails(this.orderId).subscribe(order => {
      this.isLoading = false;
      this.products = order.products;
      this.total = order.total;
      this.subtotal = this.total;
      this.isOrderPlaced = order.payment_status
      this.initiateForm(this.isOrderPlaced?order:null)
      if(this.isOrderPlaced) {
        this.isPhoneVerified = true;
        this.form.disable()
      }
    },err => {
      this.isLoading = false;
      this.orderNotFound = true;
    })
  }

  private initiateForm(orderDetails : OrderDetail){
    this.form = new FormGroup({
      phone_number: new FormControl(
         orderDetails?.phone_number, [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.required,
        ]),
      user_name: new FormControl(orderDetails?.user_name,Validators.required),
      email: new FormControl(orderDetails?.email,[Validators.required,Validators.email]),
      address: new FormControl(orderDetails?.address,Validators.required),
      zip_code: new FormControl(orderDetails?.zip_code,Validators.required),
      city: new FormControl(orderDetails?.city,Validators.required),
      state: new FormControl(orderDetails?.state,Validators.required)
    });
  }

  getOtp() {
    this.isLoading = true;
    this.cartApiService.getOtp(this.form.get('phone_number').value).subscribe(res => {
      this.isLoading = false;
      if (res.status === 'pending') {
        this.isOtpSent = true;
        this.form.get('phone_number').disable();
      }
    });
  }

  verifyOtp() {
    try {
      this.cartApiService.verifyOtp(this.form.get('phone_number').value, this.otpField.value).subscribe(res => {
        if (res.status === 'verified')  {
          this.isVerficationFailed = false;
          this.isPhoneVerified = true;
        }
      });
    } catch(error){
      this.isVerficationFailed = true;
    }
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
        console.log(data)
        this.isOrderPlaced = true;
    })
  }

  // razorpay_order_id: "order_FCUg1zC0k6rlVv"
  // razorpay_payment_id: "pay_FCUgrUdI4x8T39"
  // razorpay_signature: "0ef2193fb5ade55760525fb94d548cb752cca1d02bc1f49da6b53f32a5a18a26"
}
