import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorHandlerService} from './http-error-handler.service';
import {environment} from '../../../environments/environment';
import {
  ACKNOWLEDGE_REVIEW_API,
  GET_REVIEWS_API,
} from '../../constants/api.const';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../../modules/admin/auth.service';
import {Observable} from 'rxjs';
import {Review} from '../models/review.model';



@Injectable({providedIn: 'root'})
export class ReviewApiService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient, private httpErrorHandlerService: HttpErrorHandlerService, private authService: AuthService) {
  }

  getReviews(): Observable<Review[]> {
    const url = `${this.BASE_URL}${GET_REVIEWS_API}`;
    return this.http.get<Review[]>(url,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
      }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  acknowlegdeReview(data: any) {
    const url = `${this.BASE_URL}${ACKNOWLEDGE_REVIEW_API}`;
    return this.http.post(url, data,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

}
