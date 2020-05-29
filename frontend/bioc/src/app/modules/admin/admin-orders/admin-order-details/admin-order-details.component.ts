import { Component, OnInit } from '@angular/core';
import {OrderDetail} from "../../../../core/http/cart-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminOrderService} from "../admin-order.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.scss']
})
export class AdminOrderDetailsComponent implements OnInit {

  constructor(private orderService: AdminOrderService, private route: ActivatedRoute
              ,private authSerive: AuthService, private router: Router) { }


  token: string
  order: OrderDetail
  id: string

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.order = this.orderService.getorder(this.id)
  }

  updateStatus = status => this.orderService.updateStatus(status,this.id)

  deleteOrder = ()=> this.orderService.deleteOrder()



}
