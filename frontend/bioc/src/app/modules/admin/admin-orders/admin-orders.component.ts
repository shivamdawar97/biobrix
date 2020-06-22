import { OrderDetail} from "../../../core/http/cart-api.service";
import {AuthService} from "../auth.service";
import {AdminOrderService} from "./admin-order.service";
import { Component, OnInit} from "@angular/core";

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private apiService: AdminOrderService,private authService: AuthService) { }

  orders : OrderDetail[]

  ngOnInit(): void {

     this.apiService.getAllOrders().subscribe( data => {
       this.orders = data
       this.apiService.orders = data
     });

  }
}
