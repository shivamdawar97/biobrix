import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { OrderDetail } from './cart-api.service';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class RazorpayPaymentService {
  private BASE_URL = environment.BASE_URL;
  private INITIATE_PAYMENT =  'payment/initiate_payment/'
  private VERIFY_PAYMENT =  'payment/validate_signature/'

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService) {}

  initiatePayment(orderId: string, data: UserInfo): Observable<OrderDetail> {
    const url = `${this.BASE_URL}${this.INITIATE_PAYMENT}${orderId}`;
    return this.http.post<OrderDetail>(url, data, {
      headers: {
        'Access-Control-Allow-Methods': '*'
      }
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  verifyPayment(data: any) {
    const url = `${this.BASE_URL}${this.VERIFY_PAYMENT}`;
    return this.http.post<OrderDetail>(url, data, {
      headers: {'Access-Control-Allow-Methods': '*'}
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }


}
