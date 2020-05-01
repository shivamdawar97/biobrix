import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartApiService, OrderDetail} from '../../../core/http/cart-api.service';
import {UtilityService} from '../../../core/services/utility.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  newOrder = false;
  orderId = '';
  orderDetail: OrderDetail;
  total = 0;
  subtotal = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilityService: UtilityService,
              private cartApiService: CartApiService) {
    this.newOrder = this.route.snapshot.queryParamMap.get('new_order') === 'true';
    this.orderId = this.route.snapshot.paramMap.get('orderId');
  }

  ngOnInit(): void {
    this.utilityService.showLoader.next(true);
    this.cartApiService.orderDetails(this.orderId).subscribe(res => {
      if (res) {
        this.orderDetail = res;
        this.total = res.products.map(pro => pro.total).reduce((total, value) => total + value);
        this.subtotal = this.total;
      }
      this.utilityService.showLoader.next(false);
    }, error1 => this.utilityService.showLoader.next(false));
  }

}
