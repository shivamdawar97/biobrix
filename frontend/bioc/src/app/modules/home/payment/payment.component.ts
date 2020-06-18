import {Component, OnInit, SecurityContext} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  order_id: string;
  email: string;
  amount: string;
  phone: string;
  baseUrl = 'https://biobrix-healthcare.herokuapp.com/paytm/initiatePayment?';
  url = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.order_id = this.route.snapshot.queryParamMap.get('order_id');
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.amount = this.route.snapshot.queryParamMap.get('amount');
    this.phone = this.route.snapshot.queryParamMap.get('phone');

    this.router.navigate([], {queryParams: null});

    if (!this.order_id || !this.email || !this.amount || !this.phone ) {
      console.log('error, this should not happen');
    } else {
      this.url = this.baseUrl + `order_id=${this.order_id}&email=${this.email}&amount=${this.amount}&phone=${this.phone}`;
    }

    console.log(this.order_id, this.email, this.phone, this.amount);
  }

  ngOnInit(): void {
  }

  pageLoaded(event: any, instance) {
    console.log('page loaded', event);
  }
}
