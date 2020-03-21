import { Injectable } from '@angular/core';

import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  private _categoryList: Array<Category>;

  set categoryList(data: Category[]) {
    this._categoryList = data;
  }

  get categoryList() {
    return this._categoryList;
  }
}
