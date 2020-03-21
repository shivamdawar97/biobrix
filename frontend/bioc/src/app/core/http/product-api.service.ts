import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError } from 'rxjs/operators';

/** Models */
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

/** Services */
import { HttpErrorHandlerService } from './http-error-handler.service';
import { UtilityService } from '../services/utility.service';

/** Constants */
import { CATEGORY_API, PRODUCT_API } from 'src/app/constants/api.const';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  BASE_URL = environment.BASE_URL;

  constructor(
    private http: HttpClient,
    private httpErrorHandlerService: HttpErrorHandlerService,
    private utilityService: UtilityService
  ) { }


  getCategoryList(): Observable<Array<Category>> {
    const url = `${this.BASE_URL}${CATEGORY_API}`;
    return this.http.get<Array<Category>>(url).pipe(
      catchError(this.httpErrorHandlerService.handleErr)
    );
  }


  getProductList(paramsData?: Array<any>): Observable<Array<Product>> {
    let params = '';

    if (paramsData) {
      params = this.utilityService.setQueryParams(paramsData);
    }

    const url = `${this.BASE_URL}${PRODUCT_API}${params}`;

    return this.http.get<Array<Product>>(url).pipe(
      catchError(this.httpErrorHandlerService.handleErr)
    );
  }
}
