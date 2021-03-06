import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ContactUsService {

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService){}

  private CONTACT_US_API = `${environment.BASE_URL}contacy_us`;
  private ENQUIRY_API = `${environment.BASE_URL}trade_enquiry`;

  sendMessage = messagebody => this.http.post(this.CONTACT_US_API, messagebody).pipe(catchError(this.httpErrorHandlerService.handleErr));

  sendEnquiry = enquirybody => this.http.post(this.ENQUIRY_API, enquirybody).pipe(catchError(this.httpErrorHandlerService.handleErr));


}
