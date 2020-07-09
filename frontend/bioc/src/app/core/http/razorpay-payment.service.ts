import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RazorpayPaymentService {
  private BASE_URL = environment.BASE_URL;
  private CREATE_PAYEMT_ORDER =  'payment_order'

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService) { }

  createPaymentOrder(amount: number): Observable<any> {
    const url = `${this.BASE_URL}${this.CREATE_PAYEMT_ORDER}`;
    return this.http.post<any>(url, {amount}).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }



}
