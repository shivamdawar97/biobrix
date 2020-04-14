import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { catchError } from 'rxjs/operators';

/** Models */
import {Homepage} from '../models/homepage';

/** Services */
import { HttpErrorHandlerService } from './http-error-handler.service';
import { UtilityService } from '../services/utility.service';

/** Constants */
import { HOMEPAGE_API } from 'src/app/constants/api.const';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HomepageApiService {

  BASE_URL = environment.BASE_URL;

  constructor(
    private http: HttpClient,
    private httpErrorHandlerService: HttpErrorHandlerService,
  ) { }

  getHomePage(): Observable<Homepage> {
    const url = `${this.BASE_URL}${HOMEPAGE_API}`;
    return this.http.get<Homepage>(url).pipe(
      catchError(this.httpErrorHandlerService.handleErr)
    );
  }

}
