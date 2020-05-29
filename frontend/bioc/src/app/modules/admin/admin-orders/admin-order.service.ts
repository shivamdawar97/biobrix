import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GET_ALL_ORDERS_API, UPDATE_STATUS_API, DELETE_ORDER_API} from "../../../constants/api.const";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {OrderDetail} from "../../../core/http/cart-api.service";
import {environment} from "../../../../environments/environment";
import {HttpErrorHandlerService} from "../../../core/http/http-error-handler.service";
import {error} from "@angular/compiler/src/util";
import {AuthService} from "../auth.service";

@Injectable()
export class AdminOrderService{

  BASE_URL = environment.BASE_URL;
  orders : OrderDetail[];
  token: string;

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService
    ,private authService: AuthService) {
    this.token = this.authService.userSubject.value.token;
  }

  getorder(id: string){
    const order = this.orders.find(order => order._id===id );
    return order? order : error('No order found');
  }

  getAllOrders():  Observable<OrderDetail[]> {

    const url = `${this.BASE_URL}${GET_ALL_ORDERS_API}`;
    return this.http.get<OrderDetail[]>(url,
      { headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`) }
    ).pipe(catchError(this.httpErrorHandlerService.handleErr));

  }

  updateStatus(id:string,status: string) {
    const url = `${this.BASE_URL}${UPDATE_STATUS_API}${id}`;
    return this.http.patch<OrderDetail[]>(url,
      { status },
      { headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`) },

    ).pipe(catchError(this.httpErrorHandlerService.handleErr));

  }

  deleteOrder() {

  }


}
