import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartApiService, OrderDetail} from '../../../core/http/cart-api.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  newOrder = false;
  orderId = '';
  orderDetail: OrderDetail;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cartApiService: CartApiService) {
    this.newOrder = this.route.snapshot.queryParamMap.get('new_order') === 'true';
    this.orderId = this.route.snapshot.paramMap.get('orderId');
  }

  ngOnInit(): void {
    // this.cartApiService.orderDetails(this.orderId).subscribe(res => {
    //   if (res) {
    //     this.orderDetail = res;
    //   }
    // });
  }

}
