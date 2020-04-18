import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  showLoader: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  setQueryParams(paramsData: Array<{ name: string, value: string }>) {
    let params = '';
    paramsData.forEach(data => {
      params = params + `?${data.name}=${data.value}`;
    });
    return params;
  }
}
