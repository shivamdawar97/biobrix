import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandlerService} from './http-error-handler.service';
import {Product} from '../models/product.model';
import {environment} from '../../../environments/environment';
import {CREATE_ORDER_API, GET_ORDERS_API, GET_OTP, ORDER_DETAILS_API, UPDATE_ORDER_API, VERIFY_OTP} from '../../constants/api.const';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface CreateOrder {
  products: Product[];
  _id: string;
  total: number;
}

interface UserInfo {
  user_name: string;
  phone_number: string;
  email: string;
  address: string;
  zip_code: string;
  city: string;
  state: string;
}

interface OTP {
  status: string;
}

export interface OrderDetail extends UserInfo{
  payment_status: boolean;
  order_status: string;
  transaction_id: string;
  _id: string;
  total: number;
  user_info_completed: boolean;
  createdAt: string;
  updatedAt: string;
  products: Product[];
}

@Injectable({providedIn: 'root'})
export class CartApiService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService) {}

  createOrder(data: Product[]): Observable<CreateOrder> {
    const url = `${this.BASE_URL}${CREATE_ORDER_API}`;
    return this.http.post<CreateOrder>(url, {products: data}).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  getOtp(phone: number): Observable<OTP> {
    const url = `${this.BASE_URL}${GET_OTP}?phone_number=${phone}`;
    return this.http.get<OTP>(url).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  verifyOtp(phone: string, otp: string): Observable<OTP> {
    const url = `${this.BASE_URL}${VERIFY_OTP}?phone_number=${phone}&otp=${otp}`;
    return this.http.get<OTP>(url).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  updateOrder(orderId: string, data: UserInfo): Observable<OrderDetail> {
    const url = `${this.BASE_URL}${UPDATE_ORDER_API}${orderId}`;
    return this.http.patch<OrderDetail>(url, data, {
      headers: {
        'Access-Control-Allow-Methods': '*'
      }
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  orderDetails(id: string): Observable<OrderDetail> {
    const url = `${this.BASE_URL}${ORDER_DETAILS_API}${id}`;
    return this.http.get<OrderDetail>(url).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  getOrderByPhoneNumber(phone: string): Observable<OrderDetail> {
    const url = `${this.BASE_URL}${GET_ORDERS_API}?phone_number=${phone}`;
    return this.http.get<OrderDetail>(url).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }
}
