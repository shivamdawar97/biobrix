import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorHandlerService} from './http-error-handler.service';
import {environment} from '../../../environments/environment';
import {
  ADD_TESTIMONY_API,
  DELETE_TESTIMONIES_API,
  GET_TESTIMONIES_API
} from '../../constants/api.const';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../../modules/admin/auth.service';
import {Observable} from 'rxjs';
import {Testimony} from '../models/testimony.model';


@Injectable({providedIn: 'root'})
export class TestimonyApiService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService, private authService: AuthService) {
  }

  getTestimonies(): Observable<Testimony[]> {
    const url = `${this.BASE_URL}${GET_TESTIMONIES_API}`;
    return this.http.get<Testimony[]>(url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  deleteTestimony(id: string) {
    const url = `${this.BASE_URL}${DELETE_TESTIMONIES_API}${id}`;
    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  addTestimony(data: {image: string, testimony: string, customer_name: string}) {
    const url = `${this.BASE_URL}${ADD_TESTIMONY_API}`;
    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

}
