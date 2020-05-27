import { Component, OnInit } from '@angular/core';
import {CartApiService, OrderDetail} from "../../../core/http/cart-api.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private apiService: CartApiService,private authService: AuthService) { }

  orders : OrderDetail[]

  ngOnInit(): void {

     this.apiService.getAllOrders(this.authService.userSubject.value.token).subscribe( data => this.orders =data)

  }

}
