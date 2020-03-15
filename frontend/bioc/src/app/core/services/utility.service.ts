import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  setQueryParams(paramsData: Array<{ name: string, value: string }>) {
    let params = '';
    paramsData.forEach(data => {
      params = params + `?${data.name}=${data.value}`;
    });
    return params;
  }
}
