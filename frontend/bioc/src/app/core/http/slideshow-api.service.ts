import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorHandlerService} from './http-error-handler.service';
import {environment} from '../../../environments/environment';
import {
  GET_PAGER_API, PAGER_PRODUCT_API,
} from '../../constants/api.const';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../../modules/admin/auth.service';
import {Observable} from 'rxjs';
import {ProductDetail} from '../models/product-detail.model';


export interface Slideshow {
  image: string;
  id: string;
  product: {
    image: string;
    product_id: string;
  };
}

@Injectable({providedIn: 'root'})
export class SlideshowApiService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService, private authService: AuthService) {
  }

  getSlideshows(): Observable<Slideshow[]> {
    const url = `${this.BASE_URL}${GET_PAGER_API}`;
    return this.http.get<Slideshow[]>(url,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
      }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  deleteSlide(id: string) {
    const url = `${this.BASE_URL}${PAGER_PRODUCT_API}/${id}`;
    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }


  addSlide(value: {image: File, product_id: string}) {
    const form = new FormData();
    form.append('product_id', value.product_id);
    form.append('image', value.image, 'image');
    const url = `${this.BASE_URL}${PAGER_PRODUCT_API}`;
    return this.http.post<ProductDetail>(url, form,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
      }
    ).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }
}
