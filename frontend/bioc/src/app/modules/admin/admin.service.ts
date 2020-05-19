import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/core/models/product-detail.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService } from 'src/app/core/http/http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable()
export class AdminServices {
  BASE_URL = environment.BASE_URL;
  PRODUCT_API = 'get_all_products'

  constructor( private http: HttpClient,
    private httpErrorHandlerService: HttpErrorHandlerService,private authservice: AuthService){}

  getProductList(): Observable<Array<ProductDetail>> {

    const url = `${this.BASE_URL}${this.PRODUCT_API}`;

    return this.http.get<Array<ProductDetail>>(url,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }


}
